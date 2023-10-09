import { Component } from '@angular/core';
import { faPlane, faArrowRightLong, faCaretRight, faMagnifyingGlass, faInfoCircle, faTag, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-first-destination',
  templateUrl: './first-destination.component.html',
  styleUrls: ['./first-destination.component.css']
})
export class FirstDestinationComponent {
  faPlane = faPlane
  faArrowRightLong = faArrowRightLong
  faCaretRight = faCaretRight
  faMagnifyingGlass = faMagnifyingGlass
  faInfoCircle = faInfoCircle
  faTag = faTag
  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight
  
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
}

