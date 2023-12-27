import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgSelectConfig } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('dropdownMenuOne') dropdownMenuOne?: ElementRef;
  @ViewChild('dropdownMenuTwo') dropdownMenuTwo?: ElementRef;
  @ViewChild('dropdownMenuThree') dropdownMenuThree?: ElementRef;
  @ViewChild('dropdownButton') dropdownButton!: ElementRef;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 2000,
    dots: false,
    navSpeed: 1000,
    navText: ['<i class="icon-line-chevron-left"></i>', '<i class="icon-line-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  ageNumbers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  hoveredDate: NgbDate | null = null;
  fromDate!: NgbDate | null;
  toDate!: NgbDate | null;
  searchFormHotel?: FormGroup
  searchFormPackage?: FormGroup
  searchFormCustom?: FormGroup
  selectedDate: any
  searchType = 'package'
  numAdults = 1
  numAdultsHotel = 1
  numAdultsCustom = 1
  numChildren = 0
  numChildrenHotel = 0
  numChildrenCustom = 0
  dropdownOpen = false;
  todayDate!: NgbDate;
  today: any
  hotels = [
    { name: 'All Hotels' },
    { name: 'Movenpick Makkah Hajar Tower', city: 'Makkah' },
    { name: 'Swissotel Al Maqam Makkah', city: 'Makkah' },
    { name: 'Pullman ZamZam Makkah', city: 'Makkah' },
    { name: 'Anwar Al Madinah Mövenpick', city: 'Madinah' },
  ];

  constructor(private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private config: NgSelectConfig,
    private toastr: ToastrService,
    private router: Router,
    private renderer: Renderer2) {
    // this.fromDate = calendar.getToday();
    // this.toDate = calendar.getToday();
    // this.todayDate = calendar.getToday();
    this.today = calendar.getToday()
    this.config.notFoundText = 'Hotel not found';
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
    this.searchFormPackage = new FormGroup({
      departureCity: new FormControl('', [Validators.required]),
      period: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      flight: new FormControl('', [Validators.required]),
      passengers: new FormArray([new FormGroup({
        adults: new FormControl(1),
        children: new FormArray([]),
        room: new FormControl("Room 1"),
      })]),
    })
    this.searchFormCustom = new FormGroup({
      flightmode: new FormControl(''),
      fromDate: new FormControl({}),
      toDate: new FormControl({}),
      residenceCountry: new FormControl('', [Validators.required]),
      departureCountry: new FormControl('', [Validators.required]),
      Nationality: new FormControl('', [Validators.required]),
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
    this.searchFormCustom?.get('flightmode')?.setValue('Umrah package without flight')
  }


  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
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
      let data = {
        fromDate: this.fromDate,
        toDate: this.toDate,
      }
      localStorage.setItem('dates', JSON.stringify(data))
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
  /***************************
      Hotel Section
  ************************** */
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

  /***************************
      Package Section
  ************************** */
  get passengers(): FormArray {
    return this.searchFormPackage?.get('passengers') as FormArray
  }

  children(i: any): FormArray {
    return this.passengers.at(i)?.get('children') as FormArray
  }

  addPassenger() {
    if (this.passengers.length < 3) {
      this.passengers.push(new FormGroup({
        adults: new FormControl(1),
        children: new FormArray([]),
        room: new FormControl("Room " + (this.passengers.length + 1)),
      }))
      this.numAdults += 1
    }
  }

  deletePassenger() {
    if (this.passengers.length > 1) {
      this.numAdults = this.numAdults - this.passengers.at(this.passengers.length - 1).get('adults')?.value
      this.numChildren = this.numChildren - this.passengers.at(this.passengers.length - 1).get('children')?.value.length
      this.passengers.removeAt(this.passengers.length - 1)
    }
  }

  pluschildren(i: any) {
    if (this.children(i).length < 4) {
      this.children(i).push(new FormGroup({
        age: new FormControl("")
      }))
      this.numChildren += 1
    }
  }

  minuschildren(i: any) {
    if (this.children(i).length > 0) {
      this.children(i).removeAt(this.children(i).length - 1)
      this.numChildren -= 1
    }
  }

  plusadults(i: any) {
    if (this.passengers.at(i).get('adults')?.value < 5) {
      this.passengers.at(i).get('adults')?.setValue(this.passengers.at(i).get('adults')?.value + 1)
      this.numAdults += 1
    }
  }

  minusadults(i: any) {
    if (this.passengers.at(i).get('adults')?.value > 1) {
      this.passengers.at(i).get('adults')?.setValue(this.passengers.at(i).get('adults')?.value - 1)
      this.numAdults -= 1
    }
  }

  /***************************
      Custom Section
  ************************** */
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
  plusNightsDestionation(index: any) {
    const nightsFormControl = this.destinations.at(index)?.get('nights');
    if (nightsFormControl) {
      let currentNightsValue = nightsFormControl.value;
      currentNightsValue += 1;
      nightsFormControl.setValue(currentNightsValue);
    }
  }

  minusNightsDestionation(index: any) {
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


  toggleDropdown(value: any, index: any) {
    if (value == '1') {
      const dropdownMenuElement1 = this.dropdownMenuOne?.nativeElement;
      dropdownMenuElement1.classList.remove('show')
    }
    if (value == '2') {
      const dropdownMenuElement2 = this.dropdownMenuTwo?.nativeElement;
      dropdownMenuElement2.classList.remove('show')
    }
    if (value == '3') {
      const dropdownMenuElement3 = this.dropdownMenuThree?.nativeElement;
      dropdownMenuElement3.classList.remove('show')
    }
    if (value == '4') {
      const element = document.getElementById('dropdown-' + index)
      if (element) {
        element.classList.remove('show')
      }
    }

  }

  search() {
    if (this.searchType === 'hotel') {
      // to be integrated
    }
    if (this.searchType === 'package') {
      let data = this.searchFormPackage?.get('passengers')?.value.length
      localStorage.setItem('roomNumberPackage', data)
      this.router.navigateByUrl('/umrah-package/result')
    }
    if (this.searchType === 'custom') {
      this.router.navigateByUrl('/umrah-custom/result/flight')
    }
    const data = {
      flight: true,
      firstDestination: false,
      secondDestination: false,
      transfer: false,
      summary: false,
    }
    // const formGroupData = {
    //   searchFormHotel: this.searchFormHotel?.value,
    //   searchFormPackage: this.searchFormPackage?.value,
    //   searchFormCustom: this.searchFormCustom?.value
    // }
    localStorage.setItem('steps', JSON.stringify(data))
    // localStorage.setItem('formGroupData', JSON.stringify(formGroupData))

  }

}
