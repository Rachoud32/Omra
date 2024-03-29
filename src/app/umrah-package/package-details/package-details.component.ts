import {
  Component,
  ElementRef,
  HostListener,
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
import { PageService } from 'src/app/services/page.service';
import lightGallery from 'lightgallery';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css'],
  encapsulation: ViewEncapsulation.None
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
      name: 'Hotels',
      icon: 'assets/hotel-menu-icon.svg',
      scale: 'transform: scale(1.1);',
      id: 'hotelsection'
    },
    {
      name: 'Flights',
      icon: 'assets/plane-menu-icon.svg',
      scale: 'transform: scale(1);',
      id: 'flightsection'
    },
    {
      name: 'Transfers',
      icon: 'assets/car-menu-icon.svg',
      scale: 'transform: scale(0.7);',
      id: 'transfersection'
    },
    {
      name: 'Activities',
      icon: 'assets/activities-menu-icon.svg',
      scale: 'transform: scale(0.9);',
      id: 'activitiessection'
    },
    {
      name: 'Visits',
      icon: 'assets/visits-menu-icon.svg',
      scale: 'transform: scale(0.8);',
      id: 'visitssection'
    },
    {
      name: 'Plan',
      icon: 'assets/plan-menu-icon.svg',
      scale: 'transform: scale(0.9);',
      id: 'plansection'
    },
    {
      name: 'Policies',
      icon: 'assets/policies-menu-icon.svg',
      scale: 'transform: scale(0.9);',
      id: 'policiessection'
    },
  ];
  destinationTitle = 'Makkah'
  package: any;
  activeSection: any;
  selectedOffer: string = '';
  selectedHotelRoomsList: string = ''
  firstverify = false
  secondverify = false
  galleryMobile: boolean = false
  loading = false
  loadingsection = false
  loadinghotel = false
  skeletons: any[] = [1, 2]
  navskeletons: any[] = [1, 2, 3, 4, 5, 6, 7]
  counterValue = 0;
  targetValue = 100;
  durationInSeconds = 4;
  selectedPackRoomsList: string | null = null;

  RoomDestinationOneData: any
  RoomDestinationTwoData: any

  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  roomsSelectionFirstDest: any = {
    hotel: null,
    rooms: []
  }
  roomsSelectionSecondDest: any = {
    hotel: null,
    rooms: []
  }
  summary: any
  isReadMore: boolean[] = [];
  isShowMore: boolean = false;
  maxHeight?: number;
  id: any

  constructor(
    private el: ElementRef,
    private router: Router,
    private packageService: packageService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private pageService: PageService
  ) { }

  ngOnInit(): void {
    this.galleryMobile = window.innerWidth <= 1199.98
    this.pageService.setSpecificComponentPresent(true);
    this.loading = true
    this.loadinghotel = true
    this.startCounter(this.durationInSeconds)
    this.id = this.route.snapshot.params['id'];
    let data = this.packageService.dataPackages();
    this.package = data.find((el) => this.id == el._id);
    let rooms = Number(localStorage.getItem('roomNumberPackage')) || 0
    for (let i = 0; i < rooms; i++) {
      this.roomsSelectionFirstDest.rooms.push(
        {
          room: 'Room ' + (i + 1),
          roomStyle: 'room-label',
          label: 'Room ',
          index: i + 1,
          indexStyle: 'room-index',
          selectedType: null
        }
      )
      this.roomsSelectionSecondDest.rooms.push(
        {
          room: 'Room ' + (i + 1),
          roomStyle: 'room-label',
          label: 'Room ',
          index: i + 1,
          indexStyle: 'room-index',
          selectedType: null
        }
      )
    }
    setTimeout(() => {
      this.loading = false
      this.loadinghotel = false
    }, 3000)
  }

  startCounter(value: any) {
    const interval$ = interval((value * 1000) / this.targetValue);
    interval$
      .pipe(
        take(this.targetValue + 1)
      )
      .subscribe(() => {
        this.counterValue++;
      });
  }

  goToNextDestination() {
    if (this.destinationTitle == "Madinah") {
      this.roomsSelectionSecondDest.rooms.map((el: any) => {
        if (el.selectedType == null) {
          this.secondverify = false
        }
      })
      if (this.secondverify) {
        this.destinationTitle = "Summary"
        this.loadinghotel = true
        this.startCounter(this.durationInSeconds / 2)
        setTimeout(() => {
          this.loadinghotel = false
        }, 3000)
        this.counterValue = 0
      } else {
        this.toastr.info("Please select the type of every room of your second destination before proceeding.")
      }
    }
    if (this.destinationTitle == "Makkah") {
      this.roomsSelectionFirstDest.rooms.map((el: any) => {
        if (el.selectedType == null) {
          this.firstverify = false
        }
      })
      if (this.firstverify) {
        this.destinationTitle = "Madinah"
        this.loadinghotel = true
        this.startCounter(this.durationInSeconds / 2)
        setTimeout(() => {
          this.loadinghotel = false
        }, 3000)
        this.counterValue = 0

      } else {
        this.toastr.info("Please select the type of every room of your first destination before proceeding.")
      }
    }
  }

  goToNextStep = () => {
    if (this.firstverify && this.secondverify && this.destinationTitle == "Summary") {
      this.router.navigate(['umrah-package/result/package',this.id,'extras']);
      window.scrollTo(0, 0)
    }
    if (!this.firstverify) {
      this.toastr.info("Please select the type of every room of your first destination before proceeding.")
    }
    if (!this.secondverify && this.firstverify) {
      this.toastr.info("Please select the type of every room of your Second destination before proceeding.")
    }
  }

  clearChange() {
    this.destinationTitle = 'Makkah'
  }

  clearFirstChange() {
    this.destinationTitle = 'Makkah'
  }

  clearSecondChange() {
    this.destinationTitle = 'Madinah'
  }

  chooseSection(sectionId: string) {
    console.log(`Tab clicked: ${sectionId}`);
    this.loadingsection = true
    this.loadinghotel = true
    setTimeout(() => {
      this.loadingsection = false
      this.loadinghotel = false
    }, 3000)
  }

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
  };

  checkOffer(value: string) {
    this.selectedOffer = value;
  }

  selectType(data: any, hotel: any, room: any) {
    console.log({ data, hotel, room });

    if (this.destinationTitle == 'Makkah') {
      this.firstverify = true
      let roomData = this.roomsSelectionFirstDest.rooms.find((el: any) => room == el.room)
      roomData.selectedType = data
      this.roomsSelectionFirstDest.hotel = hotel
      console.log(this.roomsSelectionFirstDest);
      localStorage.setItem('selectedroomFirstDestData', JSON.stringify(this.roomsSelectionFirstDest.hotel))
    }
    if (this.destinationTitle == 'Madinah') {
      this.secondverify = true
      let roomData = this.roomsSelectionSecondDest.rooms.find((el: any) => room == el.room)
      roomData.selectedType = data
      this.roomsSelectionSecondDest.hotel = hotel
      console.log(this.roomsSelectionSecondDest);
      localStorage.setItem('selectedroomSecondDestData', JSON.stringify(this.roomsSelectionSecondDest.hotel))
    }
  }

  collapsedPackRoomsList(accordionId: string, accordionButton: any): void {
    const dataBsTarget = accordionButton.getAttribute('data-bs-target');
    const ariaControls = accordionButton.getAttribute('aria-controls');
    console.log('data-bs-target:', dataBsTarget);
    console.log('aria-controls:', ariaControls);
  }

  showMore() {
    this.isShowMore = !this.isShowMore;
  }

  showText(index: number) {
    this.isReadMore[index] = !this.isReadMore[index];
  }

  displayText(text: string, index: number) {
    if (this.isReadMore[index]) {
      return text 
    } else { 
      return text.slice(0, 180) + '...'
    }
  }

  displayMore(text: string) {
    if (this.isShowMore) {
      return text 
    } else { 
      return text.slice(0, 350) + '...'
    }
  }

  displayActivity(text: string, index: number) {
    if (this.isReadMore[index]) {
      return text 
    } else { 
      return text.slice(0, 150) + '...'
    }
  }

  displayVisit(text: string, index: number) {
    if (this.isReadMore[index]) {
      return text 
    } else { 
      return text.slice(0, 150) + '...'
    }
  }

  collapsedHotelRoomsList(value: any) {
    this.selectedHotelRoomsList = value
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkWindowSize();
  }

  checkWindowSize(): void {
    this.galleryMobile = window.innerWidth <= 1199.98;
  }

}
