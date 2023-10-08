import { Component } from '@angular/core';

@Component({
  selector: 'app-first-destination',
  templateUrl: './first-destination.component.html',
  styleUrls: ['./first-destination.component.css']
})
export class FirstDestinationComponent {
  selectedOption: string = '';
  option1 = 'option1';
  option2 = 'option2';

  checkOption() {
    this.selectedOption = this.option1; // Set the selected option to option1
  }
}

