import { Component, VERSION, ViewEncapsulation } from '@angular/core';
import { faPlane, faArrowRightLong, faCaretRight, faMagnifyingGlass, faInfoCircle, faTag, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-destination',
  templateUrl: './first-destination.component.html',
  styleUrls: ['./first-destination.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FirstDestinationComponent {
  constructor(private toastr: ToastrService, private router: Router) {};

  faPlane = faPlane
  faArrowRightLong = faArrowRightLong
  faCaretRight = faCaretRight
  faMagnifyingGlass = faMagnifyingGlass
  faInfoCircle = faInfoCircle
  faTag = faTag
  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight
  roomSelectionStep = "step1"
  selectedRoom: string = ''
  isChecked: boolean = false;
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;

  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };

  goToGroundServices() {
    if (this.selectedRoom != '' && this.roomSelectionStep === "step1") {
      this.roomSelectionStep = "step2"
    } else if (this.selectedRoom != ''){
      this.router.navigate(['/result/first-transfer']);
    } else {
      this.toastr.info("Please select a room before proceeding.")
    }
  }

  checkRoom(value: string) {
    this.selectedRoom = value;
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  toggleCheckbox1() {
    this.isChecked1 = !this.isChecked1;
  }

  toggleCheckbox2() {
    this.isChecked2 = !this.isChecked2;
  }

  toggleCheckbox3() {
    this.isChecked3 = !this.isChecked3;
  }

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}

