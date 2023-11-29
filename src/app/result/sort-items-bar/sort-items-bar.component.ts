import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-items-bar',
  templateUrl: './sort-items-bar.component.html',
  styleUrls: ['./sort-items-bar.component.css']
})

export class SortItemsBar {
  selectedFilter: string = '';

  checkFilter(value: string) {
    this.selectedFilter = value;
  }
}
