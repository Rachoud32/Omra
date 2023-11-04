import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-top-filter',
  templateUrl: './flight-top-filter.component.html',
  styleUrls: ['./flight-top-filter.component.css']
})

export class FlightTopFilterComponent {
  selectedFilter: string = '';

  checkFilter(value: string) {
    this.selectedFilter = value;
  }
}
