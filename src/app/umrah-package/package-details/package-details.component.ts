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

  package: any;
  activeSection: any;
  selectedOffer: string = '';
  selectedRoomType: string | null = null;
  selectedPackRoomsList: string = ''
  types: any[] = []
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
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    let data = this.packageService.dataPackages();
    this.package = data.find((el) => id == el._id);
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
