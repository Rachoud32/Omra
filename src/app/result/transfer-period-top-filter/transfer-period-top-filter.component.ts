import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer-period-top-filter',
  templateUrl: './transfer-period-top-filter.component.html',
  styleUrls: ['./transfer-period-top-filter.component.css']
})
export class TransferPeriodTopFilterComponent {
  selectedDuration: string = '';

  checkFilter(value: string) {
    this.selectedDuration = value;
  }
}
