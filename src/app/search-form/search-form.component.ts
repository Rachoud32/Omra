import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  searchFormPackage?: FormGroup
  searchFormMap?: FormGroup
  omraType = 'package'
  numAdults = 1
  numAdultsMap = 1
  numChildren = 0
  numChildrenMap = 0
  dropdownOpen = false;
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

  }

  ngOnInit(): void {
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
    this.searchFormMap = new FormGroup({
      fromDate: new FormControl({}),
      toDate: new FormControl({}),
      residenceCountry: new FormControl('', [Validators.required]),
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
      passengersmap: new FormArray([new FormGroup({
        adults: new FormControl(1),
        childrenmap: new FormArray([]),
        room: new FormControl("Room 1"),
      })]),
    })
    this.searchFormMap?.get('fromDate')?.setValue(this.fromDate)
    this.searchFormMap?.get('toDate')?.setValue(this.toDate)
  }


  onChangeType() {
    console.log(this.omraType);

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
  // **************************
  // Package Section
  // **************************
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

  // **************************
  // Map Section
  // **************************
  get passengersmap(): FormArray {
    return this.searchFormMap?.get('passengersmap') as FormArray
  }
  childrenmap(i: any): FormArray {
    return this.passengersmap.at(i)?.get('childrenmap') as FormArray
  }

  get firstDestination(): FormGroup {
    return this.passengersmap.get('firstDestination') as FormGroup
  }
  get secondDestination(): FormGroup {
    return this.passengersmap.get('secondDestination') as FormGroup
  }
  addPassengermap() {
    if (this.passengersmap.length < 3) {
      this.passengersmap.push(new FormGroup({
        adults: new FormControl(1),
        childrenmap: new FormArray([]),
        room: new FormControl("Room " + (this.passengersmap.length + 1)),
      }))
      this.numAdults += 1
    }
  }
  deletePassengermap() {
    if (this.passengersmap.length > 1) {
      this.numAdults = this.numAdults - this.passengersmap.at(this.passengersmap.length - 1).get('adults')?.value
      this.numChildrenMap = this.numChildrenMap - this.passengersmap.at(this.passengersmap.length - 1).get('childrenmap')?.value.length
      this.passengersmap.removeAt(this.passengersmap.length - 1)
    }
  }

  plusNightsFirstDestionation() {
    const nightsFormControl = this.searchFormMap?.get('firstDestination')?.get('nights');
    if (nightsFormControl) {
      let currentNightsValue = nightsFormControl.value;
      currentNightsValue += 1;
      nightsFormControl.setValue(currentNightsValue);
    }
  }
  minusNightsFirstDestionation() {
    const nightsFormControl = this.searchFormMap?.get('firstDestination')?.get('nights');
    if (nightsFormControl && nightsFormControl.value > 0) {
      let currentNightsValue = nightsFormControl.value;
      currentNightsValue -= 1;
      nightsFormControl.setValue(currentNightsValue);
    }
  }

  plusNightsSecondDestionation() {
    const nightsFormControl = this.searchFormMap?.get('secondDestination')?.get('nights');
    if (nightsFormControl) {
      let currentNightsValue = nightsFormControl.value;
      currentNightsValue += 1;
      nightsFormControl.setValue(currentNightsValue);
    }
  }
  minusNightsSecondDestionation() {
    const nightsFormControl = this.searchFormMap?.get('secondDestination')?.get('nights');
    if (nightsFormControl && nightsFormControl.value > 0) {
      let currentNightsValue = nightsFormControl.value;
      currentNightsValue -= 1;
      nightsFormControl.setValue(currentNightsValue);
    }
  }

  pluschildrenmap(i: any) {
    if (this.childrenmap(i).length < 4) {
      this.childrenmap(i).push(new FormGroup({
        age: new FormControl("")
      }))
      this.numChildrenMap += 1
    }
  }
  minuschildrenmap(i: any) {
    if (this.childrenmap(i).length > 0) {
      this.childrenmap(i).removeAt(this.childrenmap(i).length - 1)
      this.numChildrenMap -= 1
    }
  }
  plusadultsmap(i: any) {
    if (this.passengersmap.at(i).get('adults')?.value < 5) {
      this.passengersmap.at(i).get('adults')?.setValue(this.passengersmap.at(i).get('adults')?.value + 1)
      this.numAdultsMap += 1
    }
  }
  minusadultsmap(i: any) {
    if (this.passengersmap.at(i).get('adults')?.value > 1) {
      this.passengersmap.at(i).get('adults')?.setValue(this.passengersmap.at(i).get('adults')?.value - 1)
      this.numAdultsMap -= 1
    }
  }

  searchMap() {
    console.log(this.searchFormMap?.value);
  }

}
