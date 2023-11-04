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

  dataHotel: any[] = [
    {
      _id: 1,
      hotelImage: "assets/flight/tunisair.svg",
      hotelName: "Shahd Al Madinah",
      hotelType: "Economic",
      bestRate: "1200",
      timeOfDeparture: "14:10",
      timeOfArrival: "17:10",
      duration: "02:00",
      departure: "Sfax (SFA)",
      destination: "Jeddah (JED)",
      dateOfDeparture: "01 nov. 2023",
      dateOfArrival: "01 nov. 2023",
      stops: "Direct",
      flightNumber: "TU0606",
      details: {
        class: "First",
        baggage: "1 piece of checked baggage (per ad.)",
        timeOfDeparture: "14:10",
        timeOfArrival: "17:10",
        duration: "02:00",
        departure: "Sfax (SFA)",
        destination: "Jeddah (JED)",
        dateOfDeparture: "01 nov. 2023",
        flightNumber: "TU0606",
      },
    }
  ]
  
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
  selectedGroundServices: string[] = []

  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  goToNextStep = () => {
    if (this.selectedRoom != '' && this.roomSelectionStep == "step1") {
      this.roomSelectionStep = "step2"
    } else if (this.roomSelectionStep == "step2") {
      const data = {
        flight: true,
        firstDestination: true,
        secondDestination: true,
        transfer: true,
        summary: false,
      }
      localStorage.setItem('steps', JSON.stringify(data))
      window.location.href = '/result/first-transfer';
    } else {
      this.toastr.info("Please select a room for your 2nd destination before proceeding.")
    }
  }
  checkRoom(value: string) {
    this.selectedRoom = value;
  }

  checkGroundService(value: string) {
    if (!this.selectedGroundServices.includes(value)) {
      this.selectedGroundServices.push(value);
    }
    else {
      const index = this.selectedGroundServices.indexOf(value)
      this.selectedGroundServices.splice(index, 1);
    }
    console.log(this.selectedGroundServices);

  }

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}

