import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
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

  hoveredDate: NgbDate | null = null;
  fromDate!: NgbDate | null;
  toDate!: NgbDate | null;
  todayDate!: NgbDate;
  today: any

  formattedFromDate: string = ''
  formattedToDate: string = ''

  ageNumbers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  searchFormHotel!: FormGroup
  selectedDate: any
  searchType = 'hotel'
  numAdults = 1
  numAdultsHotel = 1
  numAdultsCustom = 1
  numChildren = 0
  numChildrenHotel = 0
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
    { country: 'Algeria', region: 'Africa'},
    { country: 'Morocco', region: 'Africa'},
    { country: 'Bahrain', region: 'Asia' },
    { country: 'Kuwait', region: 'Asia' },
    { country: 'France', region: 'Europe'},
    { country: 'Italy', region: 'Europe'},
    { country: 'UK', region: 'Europe' },
    { country: 'Australia', region: 'Oceania' }
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
    this.searchFormHotel = new FormGroup({
      hotelName: new FormControl(null, [Validators.required]),
      fromDate: new FormControl({}),
      toDate: new FormControl({}),
      passengersHotel: new FormArray([new FormGroup({
        adults: new FormControl(1),
        childrenHotel: new FormArray([]),
        room: new FormControl("Room 1"),
      })]),
    })

    const dates = JSON.parse(localStorage.getItem('dates') || '{}')
    this.fromDate = dates.fromDate;
    this.toDate = dates.toDate;
    this.formattedFromDate = this.formatter.format(this.fromDate).substring(5)
    this.formattedToDate = this.formatter.format(this.toDate).substring(5)
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

  get passengersHotel(): FormArray {
    return this.searchFormHotel?.get('passengersHotel') as FormArray
  }

  childrenHotel(i: any): FormArray {
    return this.passengersHotel.at(i)?.get('childrenHotel') as FormArray
  }

  addPassengerhotel() {
    if (this.passengersHotel.length < 3) {
      this.passengersHotel.push(new FormGroup({
        adults: new FormControl(1),
        childrenHotel: new FormArray([]),
        room: new FormControl("Room " + (this.passengersHotel.length + 1)),
      }))
      this.numAdultsHotel += 1
    }
  }

  deletePassengerhotel() {
    if (this.passengersHotel.length > 1) {
      this.numAdultsHotel = this.numAdultsHotel - this.passengersHotel.at(this.passengersHotel.length - 1).get('adults')?.value
      this.numChildrenHotel = this.numChildrenHotel - this.passengersHotel.at(this.passengersHotel.length - 1).get('childrenHotel')?.value.length
      this.passengersHotel.removeAt(this.passengersHotel.length - 1)
    }
  }

  pluschildrenhotel(i: any) {
    if (this.childrenHotel(i).length < 4) {
      this.childrenHotel(i).push(new FormGroup({
        age: new FormControl("")
      }))
      this.numChildrenHotel += 1
    }
  }

  minuschildrenhotel(i: any) {
    if (this.childrenHotel(i).length > 0) {
      this.childrenHotel(i).removeAt(this.childrenHotel(i).length - 1)
      this.numChildrenHotel -= 1
    }
  }

  plusadultshotel(i: any) {
    if (this.passengersHotel.at(i).get('adults')?.value < 5) {
      this.passengersHotel.at(i).get('adults')?.setValue(this.passengersHotel.at(i).get('adults')?.value + 1)
      this.numAdultsHotel += 1
    }
  }

  minusadultshotel(i: any) {
    if (this.passengersHotel.at(i).get('adults')?.value > 1) {
      this.passengersHotel.at(i).get('adults')?.setValue(this.passengersHotel.at(i).get('adults')?.value - 1)
      this.numAdultsHotel -= 1
    }
  }

  toggleDropdown(index: string) {
    if (index == '1') {
      const dropdownMenuElement1 = this.dropdownMenuOne?.nativeElement;
      dropdownMenuElement1.classList.remove('show')
    }
  }

}
