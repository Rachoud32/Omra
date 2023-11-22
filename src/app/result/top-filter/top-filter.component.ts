import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-filter',
  templateUrl: './top-filter.component.html',
  styleUrls: ['./top-filter.component.css']
})
export class TopFilterComponent implements OnInit {
  filterType = ''
  order = "increment"
  // flight variables
  departureTimes: any[] = []
  arrivalTimes: any[] = []
  classes: any[] = []
  airlines: any[] = []
  stops: any[] = []
  // destinations

  starRatings: any[] = []
  pensions: any[] = []
  themesDestination: any[] = []
  policies: any[] = []
  views: any[] = []
  filterValue = ''
  filteredHotels: any[] = []


  // transfer
  vehicleTypes: any[] = []
  themesTransfer: any[] = []
  vehicleSpecs: any[] = []
  vehicleduration: any[] = []
  selectedVehicleDurations: any[] = []
  durationTransfer: any[] = ["1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "24h", "48h", "72h", "96h", "120h"]

  constructor() {
  }

  ngOnInit(): void {
    const url = window.location.href.split('/').pop()
    if (url == 'flight') {
      this.filterType = 'flight'
    }
    if (url == 'first-destination' || url == 'second-destination') {
      this.filterType = 'destination'
    }
    if (url == 'transfer') {
      this.filterType = 'transfer'
    }
  }

  sortOrder(value: string) {
    if (value === "decrement") {
      this.order = "increment"
    }
    if (value === "increment") {
      this.order = "decrement"
    }
  }

  // Flight+first destination+ second destination filters

  checkDepartureTimes(value: any) {
    if (!this.departureTimes.includes(value)) {
      this.departureTimes.push(value);
    }
    else {
      const index = this.departureTimes.indexOf(value)
      this.departureTimes.splice(index, 1);
    }
  }
  checkArrivalTimes(value: any) {
    if (!this.arrivalTimes.includes(value)) {
      this.arrivalTimes.push(value);
    }
    else {
      const index = this.arrivalTimes.indexOf(value)
      this.arrivalTimes.splice(index, 1);
    }
  }
  checkClasses(value: any) {
    if (!this.classes.includes(value)) {
      this.classes.push(value);
    }
    else {
      const index = this.classes.indexOf(value)
      this.classes.splice(index, 1);
    }
  }
  checkAirlines(value: any) {
    if (!this.airlines.includes(value)) {
      this.airlines.push(value);
    }
    else {
      const index = this.airlines.indexOf(value)
      this.airlines.splice(index, 1);
    }
  }
  checkStopovers(value: any) {
    if (!this.stops.includes(value)) {
      this.stops.push(value);
    }
    else {
      const index = this.stops.indexOf(value)
      this.stops.splice(index, 1);
    }
  }

  // Destinations filters 


  filterChange(value: any) {
    this.filterValue = value;
  }

  checkStarRatings(value: string) {
    if (!this.starRatings.includes(value)) {
      this.starRatings.push(value);
    }
    else {
      const index = this.starRatings.indexOf(value)
      this.starRatings.splice(index, 1);
    }
  }

  checkPensions(value: string) {
    if (!this.pensions.includes(value)) {
      this.pensions.push(value);
    }
    else {
      const index = this.pensions.indexOf(value)
      this.pensions.splice(index, 1);
    }

  }

  checkThemesDestination(value: string) {
    if (!this.themesDestination.includes(value)) {
      this.themesDestination.push(value);
    }
    else {
      const index = this.themesDestination.indexOf(value)
      this.themesDestination.splice(index, 1);
    }

  }
  checkPolicies(value: string) {
    if (!this.policies.includes(value)) {
      this.policies.push(value);
    }
    else {
      const index = this.policies.indexOf(value)
      this.policies.splice(index, 1);
    }

  }

  checkViews(value: string) {
    if (!this.views.includes(value)) {
      this.views.push(value);
    }
    else {
      const index = this.views.indexOf(value)
      this.views.splice(index, 1);
    }

  }


  // Transfer filters

  checkVehicleTypes(value: any) {
    if (!this.vehicleTypes.includes(value)) {
      this.vehicleTypes.push(value);
    }
    else {
      const index = this.vehicleTypes.indexOf(value)
      this.vehicleTypes.splice(index, 1);
    }
  }

  checkThemesTransfer(value: any) {
    if (!this.themesTransfer.includes(value)) {
      this.themesTransfer.push(value);
    }
    else {
      const index = this.themesTransfer.indexOf(value)
      this.themesTransfer.splice(index, 1);
    }
  }

  checkVehicleSpecs(value: any) {
    if (!this.vehicleSpecs.includes(value)) {
      this.vehicleSpecs.push(value);
    }
    else {
      const index = this.vehicleSpecs.indexOf(value)
      this.vehicleSpecs.splice(index, 1);
    }
  }

  checkVehicleDuration(value: any) {
    if (!this.selectedVehicleDurations.includes(value)) {
      this.selectedVehicleDurations.push(value);
    }
    else {
      const index = this.selectedVehicleDurations.indexOf(value)
      this.selectedVehicleDurations.splice(index, 1);
    }
  }
}
