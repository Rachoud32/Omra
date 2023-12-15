import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { packageService } from 'src/app/services/package.service';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

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
  package: any
  activeSection: any

  sections: any[] = [
    {
      name: "Overview",
      icon: "assets/overview-menu-icon.svg",
      scale: "transform: scale(0.9);",
      id: "overviewsection"
    },
    {
      name: "Flights",
      icon: "assets/plane-menu-icon.svg",
      scale: "transform: scale(1);",
      id: "flightsection"
    },
    {
      name: "Hotels",
      icon: "assets/hotel-menu-icon.svg",
      scale: "transform: scale(1.1);",
      id: "hotelsection"
    },
    {
      name: "Transfers",
      icon: "assets/car-menu-icon.svg",
      scale: "transform: scale(0.7);",
      id: "transfersection"
    },
    {
      name: "Activities",
      icon: "assets/activities-menu-icon.svg",
      scale: "transform: scale(0.9);",
      id: "activitiessection"
    },
    {
      name: "Program",
      icon: "assets/program-menu-icon.svg",
      scale: "transform: scale(0.9);",
      id: "programsection"
    },
    {
      name: "Policies",
      icon: "assets/policies-menu-icon.svg",
      scale: "transform: scale(0.9);",
      id: "policiessection"
    },
  ]

  constructor(private el: ElementRef,
    private router: Router,
    private packageService: packageService,
    private route: ActivatedRoute
  ) { }

  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    let data = this.packageService.dataPackages()
    this.package = data.find((el) => id == el._id)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onScroll(); // Trigger onScroll when the route changes
      }
    });
  }



  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const offset = this.el.nativeElement.offsetTop;
    this.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      el?.classList.remove('active')
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset + 100 && rect.bottom >= offset + 100) {
          this.activeSection = section.name
          document.getElementById(section.name)?.classList.add('active')
        }
        else {
          document.getElementById(section.name)?.classList.remove('active')
        }
      }
    });
  }

  moveTo(value: any) {
    if (value == 'Overview') {
      window.scrollTo({
        top: this.overviewsection?.nativeElement.offsetTop + 450,
        behavior: 'smooth',
      });
      this.activeSection = 'Overview'
    }
    if (value == 'Flights') {
      window.scrollTo({
        top: this.flightsection?.nativeElement.offsetTop + 370,
        behavior: 'smooth',
      });
      this.activeSection = 'Flights'
    }
    if (value == 'Hotels') {
      window.scrollTo({
        top: this.hotelsection?.nativeElement.offsetTop + 370,
        behavior: 'smooth',
      });
      this.activeSection = 'Hotels'
    }
    if (value == 'Transfers') {
      window.scrollTo({
        top: this.transfersection?.nativeElement.offsetTop + 370,
        behavior: 'smooth',
      });
      this.activeSection = 'Transfers'
    }
    if (value == 'Activities') {
      window.scrollTo({
        top: this.activitiessection?.nativeElement.offsetTop + 370,
        behavior: 'smooth',
      });
      this.activeSection = 'Activities'
    }
    if (value == 'Program') {
      window.scrollTo({
        top: this.programsection?.nativeElement.offsetTop + 370,
        behavior: 'smooth',
      });
      this.activeSection = 'Program'
    }
    if (value == 'Policies') {
      window.scrollTo({
        top: this.policiessection?.nativeElement.offsetTop + 370,
        behavior: 'smooth',
      });
      this.activeSection = 'Policies'
    }
  }
}
