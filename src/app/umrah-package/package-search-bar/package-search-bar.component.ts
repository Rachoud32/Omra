import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-package-search-bar',
  templateUrl: './package-search-bar.component.html',
  styleUrls: ['./package-search-bar.component.css']
})
export class PackageSearchBarComponent implements OnInit {
  @ViewChild('dropdownMenuPackage') dropdownMenuPackage?: ElementRef;

  SearchBar: boolean = true;
  category: string = '';
  dataBsTargetValue = ''
  ariaControls = ''
  ageNumbers: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  searchFormPackage!: FormGroup
  selectedDate: any
  searchType = 'package'
  numAdults = 1
  numAdultsHotel = 1
  numAdultsCustom = 1
  numChildren = 0
  numChildrenHotel = 0
  numChildrenCustom = 0
  searchMobile: boolean = false
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

  constructor(private config: NgSelectConfig) {
    this.config.notFoundText = 'Not found';
  }

  ngOnInit(): void {
    this.searchFormPackage = new FormGroup({
      departureCity: new FormControl(null, [Validators.required]),
      period: new FormControl(null, [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      flight: new FormControl('', [Validators.required]),
      passengers: new FormArray([new FormGroup({
        adults: new FormControl(1),
        children: new FormArray([]),
        room: new FormControl("Room 1"),
      })]),
    })
    this.searchMobile = window.innerWidth <= 767.98
  }

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

  toggleDropdown(index: string) {
    if (index == '1') {
      const dropdownMenuElement1 = this.dropdownMenuPackage?.nativeElement;
      dropdownMenuElement1.classList.remove('show')
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();
  }

  checkWindowSize(): void {
    this.searchMobile = window.innerWidth <= 767.98;
  }

  editSearch(): void {
    this.searchMobile = !this.searchMobile
  }

}
