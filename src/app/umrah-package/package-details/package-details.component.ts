import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { packageService } from 'src/app/services/package.service';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ToastrService } from 'ngx-toastr';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class PackageDetailsComponent implements OnInit {
  @ViewChild('overviewsection') public overviewsection?: ElementRef;
  @ViewChild('flightsection') public flightsection?: ElementRef;
  @ViewChild('hotelsection') public hotelsection?: ElementRef;
  @ViewChild('transfersection') public transfersection?: ElementRef;
  @ViewChild('activitiessection') public activitiessection?: ElementRef;
  @ViewChild('programsection') public programsection?: ElementRef;
  @ViewChild('policiessection') public policiessection?: ElementRef;

  sections: any[] = [
    {
      name: 'Flights',
      icon: 'assets/plane-menu-icon.svg',
      scale: 'transform: scale(1);',
      id: 'flightsection',
    },
    {
      name: 'Hotels',
      icon: 'assets/hotel-menu-icon.svg',
      scale: 'transform: scale(1.1);',
      id: 'hotelsection',
    },
    {
      name: 'Transfers',
      icon: 'assets/car-menu-icon.svg',
      scale: 'transform: scale(0.7);',
      id: 'transfersection',
    },
    {
      name: 'Activities',
      icon: 'assets/activities-menu-icon.svg',
      scale: 'transform: scale(0.9);',
      id: 'activitiessection',
    },
    {
      name: 'Visits',
      icon: 'assets/visits-menu-icon.svg',
      scale: 'transform: scale(0.8);',
      id: 'visitssection',
    },
    {
      name: 'Plan',
      icon: 'assets/plan-menu-icon.svg',
      scale: 'transform: scale(0.9);',
      id: 'plansection',
    },
    {
      name: 'Policies',
      icon: 'assets/policies-menu-icon.svg',
      scale: 'transform: scale(0.9);',
      id: 'policiessection',
    },
  ];

  package: any;
  activeSection: any;
  selectedOffer: string = '';

  loading = false
  skeletons: any[] = [1, 2]
  destinationOneRooms: any[] = [];
  destinationTwoRooms: any[] = [];
  counterValue = 0;
  targetValue = 100;
  durationInSeconds = 4;
  showDetailsDestinationOne: any
  showDetailsDestinationTwo: any
  selectedRoomDest1: string = '';
  selectedRoomDest2: string = '';

  selectedRoomType: string = '';
  selectedPackRoomsList: string = ''
  types: any[] = []

  dataHotelsFirst: any[] = []
  dataHotelsSecond: any[] = []
  hotelDestinationOne: any

  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  constructor(
    private el: ElementRef,
    private router: Router,
    private packageService: packageService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.startCounter(this.durationInSeconds)
    const id = this.route.snapshot.params['id'];
    let data = this.packageService.dataPackages();
    this.package = data.find((el) => id == el._id);
  }

  startCounter(value: any) {
    const interval$ = interval((value * 1000) / this.targetValue);
    interval$
      .pipe(
        take(this.targetValue + 1) // +1 to include the target value
      )
      .subscribe(() => {
        this.counterValue++;
      });
  }

  goToNextStep = () => {
    if (this.selectedRoomType != '') {
      if (this.showDetailsDestinationOne) {
        const data = {
          firstDestination: true,
          secondDestination: false,
          summary: false,
        }
        localStorage.setItem('steps', JSON.stringify(data))
        window.location.href = 'umrah-package/result/package/'
      }
      else {
        this.toastr.info("Please select a room for your first destination before proceeding.")
      }
    } else {
      this.toastr.info("Please select a room for your Second destination before proceeding.")
    }
  }
  
  clearData() {
    this.showDetailsDestinationOne = null
    this.showDetailsDestinationTwo = null
    this.selectedRoomDest1 = '';
    this.selectedRoomDest2 = '';
    this.destinationTwoRooms = []
  }

  chooseSection () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  checkOffer(value: string) {
    this.selectedOffer = value;
  }

  checkRoom(type: string, idRoom: any, idHotel: any) {
    let data: any[] = this.packageService.dataPackages();
    this.hotelDestinationOne = data.find((data: any) => data._id === idHotel)
    let hotel = this.hotelDestinationOne?.details.hotels.find((data: any) => data._id == idHotel)
    if (hotel) {
      const room = hotel.rooms.find((data: any) => data.id == idRoom)
      if (room) {
        localStorage.setItem('roomHotelFirstDestination', JSON.stringify({ room: room.id, title: type }))
      }
    }
  }

  collapsedPackRoomsList(value: any) {
    this.selectedPackRoomsList = value
  }
}
