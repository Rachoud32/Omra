import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { faHotel, faPlane, faKaaba, faSuitcase, faCamera } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})

export class SearchFormComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    navSpeed: 1000,
    navText: [ '<i class="icon-line-chevron-left"></i>', '<i class="icon-line-chevron-right"></i>'],
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

  faHotel = faHotel
  faPlane = faPlane
  faKaaba = faKaaba
  faSuitcase = faSuitcase
  faCamera = faCamera
  ageNumbers: any[] = ['Less than one year', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  searchFormHotel?: FormGroup
  searchFormPackage?: FormGroup
  searchFormCustom?: FormGroup
  searchType = 'hotel'
  numAdults = 1
  numAdultsHotel= 1
  numAdultsCustom = 1
  numChildren = 0
  numChildrenHotel = 0
  numChildrenCustom = 0
  dropdownOpen = false;
  todayDate: NgbDate | null;
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getToday();
    this.todayDate = calendar.getToday();
  }

  ngOnInit(): void {
    this.searchFormHotel = new FormGroup({
      fromDate: new FormControl({}),
      toDate: new FormControl({}),
      passengers: new FormArray([new FormGroup({
        adults: new FormControl(1),
        children: new FormArray([]),
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
      nationality: new FormControl('', [Validators.required]),
      path: new FormControl('', [Validators.required]),
      firstDestination: new FormGroup({
        destinationOne: new FormControl('', [Validators.required]),
        nights: new FormControl(0, [Validators.required]),
      }),
      secondDestination: new FormGroup({
        destinationTwo: new FormControl('', [Validators.required]),
        nights: new FormControl(0, [Validators.required]),
      }),
      passengerCustom: new FormArray([new FormGroup({
        adults: new FormControl(1),
        childrenCustom: new FormArray([]),
        room: new FormControl("Room 1"),
      })]),
    })
  }
  
  onChangeType() {
    console.log(this.searchType);
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
    console.log({ parsed });

    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
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
        children: new FormArray([]),
        room: new FormControl("Room " + (this.passengersHotel.length + 1)),
      }))
      this.numAdultsHotel += 1
    }
  }

  deletePassengerhotel() {
    if (this.passengersHotel.length > 1) {
      this.numAdultsHotel = this.numAdultsHotel - this.passengersHotel.at(this.passengersHotel.length - 1).get('adults')?.value
      this.numChildrenHotel = this.numChildrenHotel - this.passengersHotel.at(this.passengersHotel.length - 1).get('children')?.value.length
      this.passengersHotel.removeAt(this.passengersHotel.length - 1)
    }
  }

  pluschildrenhotel(i: any) {
    if (this.children(i).length < 4) {
      this.children(i).push(new FormGroup({
        age: new FormControl("")
      }))
      this.numChildrenHotel += 1
    }
  }

  minuschildrenhotel(i: any) {
    if (this.children(i).length > 0) {
      this.children(i).removeAt(this.children(i).length - 1)
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

  searchHotel() {
    console.log(this.searchFormPackage?.value);
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

  searchPackage() {
    console.log(this.searchFormPackage?.value);
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

  get firstDestination(): FormGroup {
    return this.passengersCustom.get('firstDestination') as FormGroup
  }

  get secondDestination(): FormGroup {
    return this.passengersCustom.get('secondDestination') as FormGroup
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
      this.numChildrenCustom = this.numChildrenCustom - this.passengersCustom.at(this.passengersCustom.length - 1).get('childrenmap')?.value.length
      this.passengersCustom.removeAt(this.passengersCustom.length - 1)
    }
  }

  plusNightsFirstDestionation() {
    const nightsFormControl = this.searchFormCustom?.get('firstDestination')?.get('nights');
    if (nightsFormControl) {
      let currentNightsValue = nightsFormControl.value;
      currentNightsValue += 1;
      nightsFormControl.setValue(currentNightsValue);
    }
  }

  minusNightsFirstDestionation() {
    const nightsFormControl = this.searchFormCustom?.get('firstDestination')?.get('nights');
    if (nightsFormControl && nightsFormControl.value > 0) {
      let currentNightsValue = nightsFormControl.value;
      currentNightsValue -= 1;
      nightsFormControl.setValue(currentNightsValue);
    }
  }

  plusNightsSecondDestionation() {
    const nightsFormControl = this.searchFormCustom?.get('secondDestination')?.get('nights');
    if (nightsFormControl) {
      let currentNightsValue = nightsFormControl.value;
      currentNightsValue += 1;
      nightsFormControl.setValue(currentNightsValue);
    }
  }

  minusNightsSecondDestionation() {
    const nightsFormControl = this.searchFormCustom?.get('secondDestination')?.get('nights');
    if (nightsFormControl && nightsFormControl.value > 0) {
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

  searchMap() {
    console.log(this.searchFormCustom?.value);
  }

}