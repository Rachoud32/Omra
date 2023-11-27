import { Component, OnInit, VERSION, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-first-destination',
  templateUrl: './first-destination.component.html',
  styleUrls: ['./first-destination.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class FirstDestinationComponent implements OnInit {
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
  hotelDestinationOne: any

  dataHotels: any[] = []

  constructor(private toastr: ToastrService, private router: Router, private hotelService: HotelService) { };
  ngOnInit(): void {
    this.localStorageSteps = JSON.parse(localStorage.getItem('steps') || '')
    this.dataHotels = this.hotelService.hotelData()
  }

  goToNextStep = () => {
    if (this.selectedRoom != '' && this.roomSelectionStep == "step1") {
      this.roomSelectionStep = "step2"
    } else if (this.roomSelectionStep == "step2") {
      const data = {
        flight: true,
        firstDestination: true,
        secondDestination: true,
        transfer: false,
        summary: false,
      }
      localStorage.setItem('steps', JSON.stringify(data))
      window.location.href = 'umrah-custom/result/second-destination';
    } else {
      this.toastr.info("Please select a room for your 1st destination before proceeding.")
    }
  }

  checkRoom(value: string, idHotel: any) {
    this.selectedRoom = value;
    console.log(idHotel);

    this.hotelDestinationOne = this.dataHotels.find((data: any) => data._id === idHotel)
    localStorage.setItem('hotelFirstDestination', JSON.stringify(this.hotelDestinationOne))
  }

  checkGroundService(value: string) {
    if (!this.selectedGroundServices.includes(value)) {
      this.selectedGroundServices.push(value);
    }
    else {
      const index = this.selectedGroundServices.indexOf(value)
      this.selectedGroundServices.splice(index, 1);
    }
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

