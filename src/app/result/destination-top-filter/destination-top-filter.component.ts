import { Component } from '@angular/core';

@Component({
  selector: 'app-destination-top-filter',
  templateUrl: './destination-top-filter.component.html',
  styleUrls: ['./destination-top-filter.component.css']
})
export class DestinationTopFilterComponent {
  
  order = "increment"

  sortOrder(value: string) {
    if (value === "decrement") {
      this.order = "increment"
    }
    if (value === "increment") {
      this.order = "decrement"
    }
  }
}
