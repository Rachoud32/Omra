import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer-first-filter',
  templateUrl: './transfer-first-filter.component.html',
  styleUrls: ['./transfer-first-filter.component.css']
})
export class TransferFirstFilterComponent {

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
