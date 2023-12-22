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
  isModalOpen = false;
  selectedRoomType2: string | null = null;
  isModalOpen2 = false;
  roomsTypes = [
    'Standard Room',
    'Double Room',
    'Twin Room',
    'Queen Room',
    'King Room',
    'Suite',
    'Junior Suite',
    'Presidential Suite',
    'Family Room',
    'Connecting Rooms',
    'Adjoining Rooms',
    'Accessible Room',
    'Pet-friendly Room',
    'Executive Room',
    'Penthouse',
    'Cabana',
    'Loft',
    'Smoking/Non-smoking Rooms'
  ];

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
      name: 'Program',
      icon: 'assets/program-menu-icon.svg',
      scale: 'transform: scale(0.9);',
      id: 'programsection',
    },
    {
      name: 'Policies',
      icon: 'assets/policies-menu-icon.svg',
      scale: 'transform: scale(0.9);',
      id: 'policiessection',
    },
  ];

  constructor(
    private el: ElementRef,
    private router: Router,
    private packageService: packageService,
    private route: ActivatedRoute
  ) {}

  settings = {
    counter: false,
    plugins: [lgZoom],
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    let data = this.packageService.dataPackages();
    this.package = data.find((el) => id == el._id);
  }

  // moveTo(value: any) {
  //   if (value == 'Overview') {
  //     window.scrollTo({
  //       top: this.overviewsection?.nativeElement.offsetTop + 450,
  //       behavior: 'smooth',
  //     });
  //     this.activeSection = 'Overview'
  //   }

  // }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal(room: string | null) {
    this.isModalOpen = false;

    if (room !== null) {
      this.selectedRoomType = room;
    }
  }

  checkOffer(value: string) {
    this.selectedOffer = value;
  }
}
