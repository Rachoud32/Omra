import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @ViewChild('dropdownMenuOne') dropdownMenuOne?: ElementRef;
  SearchBar: boolean = true;
  category: string = '';
  dataBsTargetValue = ''
  ariaControls = ''
  customSearchMobile: boolean = false

  hoveredDate: NgbDate | null = null;
  fromDate!: NgbDate | null;
  toDate!: NgbDate | null;
  todayDate!: NgbDate;
  today: any
  formattedFromDate: string = ''
  formattedToDate: string = ''

  ageNumbers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  searchFormCustom!: FormGroup
  selectedDate: any
  searchType = 'custom'
  numAdultsCustom = 1
  numChildrenCustom = 0
  dropdownOpen = false;
  hotels = [
    { name: 'All Hotels' },
    { name: 'Movenpick Makkah Hajar Tower', city: 'Makkah' },
    { name: 'Swissotel Al Maqam Makkah', city: 'Makkah' },
    { name: 'Pullman ZamZam Makkah', city: 'Makkah' },
    { name: 'Anwar Al Madinah Mövenpick', city: 'Madinah' },
  ];
  countries = [
    { country: 'Algeria'},
    { country: 'Morocco'},
    { country: 'Bahrain'},
    { country: 'Kuwait'},
    { country: 'France'},
    { country: 'Italy'},
    { country: 'UK'},
    { country: 'Australia'}
  ];
  periods = [
    { month: 'Mouled'},
    { month: 'Ramadan'},
    { month: 'Chawel'},
    { month: 'Winter holidays'},
    { month: 'Spring holidays'},
    { month: 'Other'},
  ];

  constructor(private router: Router, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter, private config: NgSelectConfig, private toastr: ToastrService) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if ((val.url == '/' || val.url == '/umrah-custom/result/payment') || (val.url == '/' || val.url == '/umrah-custom/result/motamar-informations') || (val.url == '/' || val.url == '/umrah-custom/result/summary')) {
          this.SearchBar = false;
        } else {
          this.SearchBar = true;
        }
        if (val.url === "/umrah-custom/result/flight") {
          this.dataBsTargetValue = '#flightfilter';
          this.ariaControls = 'flightfilter';
          this.category = 'flight(s)'
        }
        if (val.url === '/umrah-custom/result/first-destination' || val.url === '/umrah-custom/result/second-destination') {
          this.dataBsTargetValue = '#destinationfilter';
          this.ariaControls = 'destinationfilter';
          this.category = 'room(s)'
        }
        if (val.url === "/umrah-custom/result/transfer") {
          this.dataBsTargetValue = '#transferfilter';
          this.ariaControls = 'transferfilter';
          this.category = 'vehicle(s)'
        }
      }
    });
    this.today = calendar.getToday()
  }

  ngOnInit(): void {
    this.searchFormCustom = new FormGroup({
      flightmode: new FormControl(''),
      fromDate: new FormControl({}),
      toDate: new FormControl({}),
      residenceCountry: new FormControl(null, [Validators.required]),
      departureCountry: new FormControl(null, [Validators.required]),
      Nationality: new FormControl(null, [Validators.required]),
      path: new FormControl('', [Validators.required]),
      destinations: new FormArray([
        new FormGroup({
          destination: new FormControl('', [Validators.required]),
          nights: new FormControl(0, [Validators.required]),
        })
      ]),
      passengersCustom: new FormArray([new FormGroup({
        adults: new FormControl(1),
        childrenCustom: new FormArray([]),
        room: new FormControl("Room 1"),
      })]),
    })

    const dates = JSON.parse(localStorage.getItem('dates') || '{}')
    this.fromDate = dates.fromDate;
    this.toDate = dates.toDate;
    this.formattedFromDate = this.formatter.format(this.fromDate).substring(5)
    this.formattedToDate = this.formatter.format(this.toDate).substring(5)
    this.customSearchMobile = window.innerWidth <= 767.98
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.formattedFromDate = this.formatter.format(this.fromDate).substring(5)
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
      this.formattedToDate = this.formatter.format(this.toDate).substring(5)
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.formattedFromDate = this.formatter.format(this.fromDate).substring(5)
    }
    if (this.fromDate && this.toDate) {
      let data = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      }
      localStorage.setItem('dates', JSON.stringify(data))
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);

    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  checkDates() {
    if (this.fromDate == null || this.toDate == null) {
      this.toastr.info("Please select both arrival and departure date.")
      return false
    } else {
      return true
    }
  }
  applyDate(date: NgbDateStruct): void {
    this.selectedDate = date
    let data = {
      fromDate: this.fromDate,
      toDate: this.toDate,
    }
    localStorage.setItem('dates', JSON.stringify(data))
  }

  get passengersCustom(): FormArray {
    return this.searchFormCustom?.get('passengersCustom') as FormArray
  }

  childrenCustom(i: any): FormArray {
    return this.passengersCustom.at(i)?.get('childrenCustom') as FormArray
  }

  get destinations(): FormArray {
    return this.searchFormCustom?.get('destinations') as FormArray
  }

  addPassengerCustom() {
    if (this.passengersCustom.length < 3) {
      this.passengersCustom.push(new FormGroup({
        adults: new FormControl(1),
        childrenCustom: new FormArray([]),
        room: new FormControl("Room " + (this.passengersCustom.length + 1)),
      }))
      this.numAdultsCustom += 1
    }
  }

  deletePassengerCustom() {
    if (this.passengersCustom.length > 1) {
      this.numAdultsCustom = this.numAdultsCustom - this.passengersCustom.at(this.passengersCustom.length - 1).get('adults')?.value
      this.numChildrenCustom = this.numChildrenCustom - this.passengersCustom.at(this.passengersCustom.length - 1).get('childrenCustom')?.value.length
      this.passengersCustom.removeAt(this.passengersCustom.length - 1)
    }
  }

  addNewDestination() {
    this.destinations.push(new FormGroup({
      destination: new FormControl('', [Validators.required]),
      nights: new FormControl(0, [Validators.required]),
    }))
  }

  removeDestination(i: any) {
    this.destinations.removeAt(i)
  }

  affectDestination(value: any, index: any) {
    const destinationFormControl = this.destinations.at(index)?.get('destination');
    if (destinationFormControl) {
      destinationFormControl.setValue(value);
    }
  }

  plusNightsDestination(index: any) {
    const nightsFormControl = this.destinations.at(index)?.get('nights');
    if (nightsFormControl) {
      let currentNightsValue = nightsFormControl.value;
      currentNightsValue += 1;
      nightsFormControl.setValue(currentNightsValue);
    }
  }

  minusNightsDestination(index: any) {
    const nightsFormControl = this.destinations.at(index)?.get('nights');
    if (nightsFormControl) {
      let currentNightsValue = nightsFormControl.value;
      currentNightsValue -= 1;
      nightsFormControl.setValue(currentNightsValue);
    }

  }

  pluschildrenCustom(i: any) {
    if (this.childrenCustom(i).length < 4) {
      this.childrenCustom(i).push(new FormGroup({
        age: new FormControl("")
      }))
      this.numChildrenCustom += 1
    }
  }

  minuschildrenCustom(i: any) {
    if (this.childrenCustom(i).length > 0) {
      this.childrenCustom(i).removeAt(this.childrenCustom(i).length - 1)
      this.numChildrenCustom -= 1
    }
  }

  plusadultsCustom(i: any) {
    if (this.passengersCustom.at(i).get('adults')?.value < 5) {
      this.passengersCustom.at(i).get('adults')?.setValue(this.passengersCustom.at(i).get('adults')?.value + 1)
      this.numAdultsCustom += 1
    }
  }

  minusadultsCustom(i: any) {
    if (this.passengersCustom.at(i).get('adults')?.value > 1) {
      this.passengersCustom.at(i).get('adults')?.setValue(this.passengersCustom.at(i).get('adults')?.value - 1)
      this.numAdultsCustom -= 1
    }
  }

  toggleDropdown(index: string) {
    if (index == '1') {
      const dropdownMenuElement1 = this.dropdownMenuOne?.nativeElement;
      dropdownMenuElement1.classList.remove('show')
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();
  }

  checkWindowSize(): void {
    this.customSearchMobile = window.innerWidth <= 767.98;
  }

}
