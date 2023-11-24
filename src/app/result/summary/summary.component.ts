import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  goToNextStep = () => {
      window.location.href = 'umrah-custom/result/motamar-informations'
  }
}
