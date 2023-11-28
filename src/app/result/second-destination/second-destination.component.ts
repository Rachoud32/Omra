import { Component, OnInit, VERSION, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-second-destination',
  templateUrl: './second-destination.component.html',
  styleUrls: ['./second-destination.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SecondDestinationComponent implements OnInit {

  roomSelectionStep = "step1"
  selectedRoom: string = ''
  selectedGroundServices: string[] = []
  selectedRoomAmenities: string = ''
  selectedRoomsList: string = ''
  localStorageSteps: any
  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  hotelDestinationTwo: any

  dataHotels: any[] = []

  constructor(private toastr: ToastrService, private router: Router, private hotelService: HotelService) { };
  ngOnInit(): void {
    this.localStorageSteps = JSON.parse(localStorage.getItem('steps') || '')
    this.dataHotels = this.hotelService.dataSecondDestination()
  }

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
      window.location.href = 'umrah-custom/result/transfer';
    } else {
      this.toastr.info("Please select a room for your 2nd destination before proceeding.")
    }
  }

  checkRoom(value: string, idHotel: any) {
    this.selectedRoom = value;
    console.log(idHotel);

    this.hotelDestinationTwo = this.dataHotels.find((data: any) => data._id === idHotel)
    localStorage.setItem('hotelSecondDestination', JSON.stringify(this.hotelDestinationTwo))
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

  collapsedRoomsList(value: any) {
    this.selectedRoomsList = value
  }
  collapsedRoomAmenities(value: any) {
    this.selectedRoomAmenities = value
  }
}

