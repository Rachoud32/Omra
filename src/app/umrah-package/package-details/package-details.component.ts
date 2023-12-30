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
import { PageService } from 'src/app/services/page.service';

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
  destinationTitle = 'First destination'
  package: any;
  activeSection: any;
  selectedOffer: string = '';
  selectedHotelRoomsList: string = ''

  loading = false
  skeletons: any[] = [1, 2]
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

  constructor(
    private el: ElementRef,
    private router: Router,
    private packageService: packageService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private pageService: PageService
  ) { }


  ngOnInit(): void {
    this.pageService.setSpecificComponentPresent(true);
    this.loading = true
    this.startCounter(this.durationInSeconds)
    const id = this.route.snapshot.params['id'];
    let data = this.packageService.dataPackages();
    this.package = data.find((el) => id == el._id);
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
  goToNextStep = () => {
    let firstverify = true
    if (this.destinationTitle == "Second destination") {
      let secondverify = true
      this.roomsSelectionSecondDest.rooms.map((el: any) => {
        if (el.selectedType == null) {
          secondverify = false
        }
      })
      if (secondverify) {
        this.destinationTitle = "Summary"
        this.loading = true
        this.startCounter(this.durationInSeconds / 2)
        setTimeout(() => {
          this.loading = false
        }, 3000)
        this.counterValue = 0
      } else {
        this.toastr.info("Please select the type of every room of your second destination before proceeding.")
      }
    }
    if (this.destinationTitle == "First destination") {
      this.roomsSelectionFirstDest.rooms.map((el: any) => {
        if (el.selectedType == null) {
          firstverify = false
        }
      })
      if (firstverify) {
        this.destinationTitle = "Second destination"
        this.loading = true
        this.startCounter(this.durationInSeconds / 2)
        setTimeout(() => {
          this.loading = false
        }, 3000)
        this.counterValue = 0
      } else {
        this.toastr.info("Please select the type of every room of your first destination before proceeding.")
      }
    }
  }
  clearChange() {
    this.destinationTitle = 'First destination'
  }
  chooseSection() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
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

    if (this.destinationTitle == 'First destination') {
      let roomData = this.roomsSelectionFirstDest.rooms.find((el: any) => room == el.room)
      roomData.selectedType = data
      this.roomsSelectionFirstDest.hotel = hotel
      console.log(this.roomsSelectionFirstDest);
    }
    if (this.destinationTitle == 'Second destination') {
      let roomData = this.roomsSelectionSecondDest.rooms.find((el: any) => room == el.room)
      roomData.selectedType = data
      this.roomsSelectionSecondDest.hotel = hotel
      console.log(this.roomsSelectionSecondDest);
    }
  }
  collapsedPackRoomsList(accordionId: string, accordionButton: any): void {
    const dataBsTarget = accordionButton.getAttribute('data-bs-target');
    const ariaControls = accordionButton.getAttribute('aria-controls');
    console.log('data-bs-target:', dataBsTarget);
    console.log('aria-controls:', ariaControls);
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
}
