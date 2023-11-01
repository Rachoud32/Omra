import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-top-filter',
  templateUrl: './top-filter.component.html',
  styleUrls: ['./top-filter.component.css']
})
export class TopFilterComponent {

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
