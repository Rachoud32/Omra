import { Component, OnInit } from '@angular/core';
import { faPlane, faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  faPlane = faPlane
  faArrowRightLong = faArrowRightLong
  faCaretRight = faCaretRight

  selectedOption: string = 'option1';
  option1 = 'option1';
  option2 = 'option2';
  option3 = 'option3';
  option4 = 'option4';
  checkOption() {
    this.selectedOption = this.option1;
  }
  checkOption2() {
    this.selectedOption = this.option2;
  }
  checkOption3() {
    this.selectedOption = this.option3;
  }
  checkOption4() {
    this.selectedOption = this.option4;
  }
  ngOnInit(): void {
   
  }
}

