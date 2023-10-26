import { Component, VERSION, ViewEncapsulation } from '@angular/core';
import { faPlane, faArrowRightLong, faCaretRight, faMagnifyingGlass, faInfoCircle, faTag, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-destination',
  templateUrl: './second-destination.component.html',
  styleUrls: ['./second-destination.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SecondDestinationComponent {
  constructor(private toastr: ToastrService, private router: Router) { };

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

  goToNextStep = () => {
    if (this.selectedRoom != '') {
      this.router.navigate(['/result/first-transfer']);
    } else {
      this.toastr.info("Please select a room for your 2nd destination before proceeding.")
    }
  }

  checkRoom(value: string) {
    this.selectedRoom = value;
  }

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}

