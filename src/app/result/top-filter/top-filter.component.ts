import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-filter',
  templateUrl: './top-filter.component.html',
  styleUrls: ['./top-filter.component.css']
})
export class TopFilterComponent {

  order = "increment"
  departureTimes: any[] = []
  arrivalTimes: any[] = []
  classes: any[] = []
  airlines: any[] = []
  stops: any[] = []
  sortOrder(value: string) {
    if (value === "decrement") {
      this.order = "increment"
    }
    if (value === "increment") {
      this.order = "decrement"
    }
  }

  checkDepartureTimes(value: any) {
    console.log(value);
    if (!this.departureTimes.includes(value)) {
      this.departureTimes.push(value);
    }
    else {
      const index = this.departureTimes.indexOf(value)
      this.departureTimes.splice(index, 1);
    }
    console.log(this.departureTimes);
  }
  checkArrivalTimes(value: any) {
    console.log(value);
    if (!this.arrivalTimes.includes(value)) {
      this.arrivalTimes.push(value);
    }
    else {
      const index = this.arrivalTimes.indexOf(value)
      this.arrivalTimes.splice(index, 1);
    }
    console.log(this.arrivalTimes);
  }
  checkClasses(value: any) {
    if (!this.classes.includes(value)) {
      this.classes.push(value);
    }
    else {
      const index = this.classes.indexOf(value)
      this.classes.splice(index, 1);
    }
    console.log(this.classes);
  }
  checkAirlines(value: any) {
    if (!this.airlines.includes(value)) {
      this.airlines.push(value);
    }
    else {
      const index = this.airlines.indexOf(value)
      this.airlines.splice(index, 1);
    }
    console.log(this.airlines);
  }
  checkStopovers(value: any) {
    if (!this.stops.includes(value)) {
      this.stops.push(value);
    }
    else {
      const index = this.stops.indexOf(value)
      this.stops.splice(index, 1);
    }
    console.log(this.stops);
  }
}
