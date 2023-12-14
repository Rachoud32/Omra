import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { packageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
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
      id: "overviewsection"
    },
    {
      name: "Flights",
      id: "flightsection"
    },
    {
      name: "Hotels",
      id: "hotelsection"
    },
    {
      name: "Transfers",
      id: "transfersection"
    },
    {
      name: "Activities",
      id: "activitiessection"
    },
    {
      name: "Program",
      id: "programsection"
    },
    {
      name: "Policies",
      id: "policiessection"
    },
  ]

  constructor(private el: ElementRef,
    private router: Router,
    private packageService: packageService,
    private route: ActivatedRoute
  ) { }
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
        if (rect.top <= offset + 200 && rect.bottom >= offset + 200) {
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
        top: this.overviewsection?.nativeElement.offsetTop + 320,
        behavior: 'smooth',
      });
      this.activeSection = 'Overview'
    }
    if (value == 'Flights') {
      window.scrollTo({
        top: this.flightsection?.nativeElement.offsetTop + 400,
        behavior: 'smooth',
      });
      this.activeSection = 'Flights'
    }
    if (value == 'Hotels') {
      window.scrollTo({
        top: this.hotelsection?.nativeElement.offsetTop + 400,
        behavior: 'smooth',
      });
      this.activeSection = 'Hotels'
    }
    if (value == 'Transfers') {
      window.scrollTo({
        top: this.transfersection?.nativeElement.offsetTop + 400,
        behavior: 'smooth',
      });
      this.activeSection = 'Transfers'
    }
    if (value == 'Activities') {
      window.scrollTo({
        top: this.activitiessection?.nativeElement.offsetTop + 400,
        behavior: 'smooth',
      });
      this.activeSection = 'Activities'
    }
    if (value == 'Program') {
      window.scrollTo({
        top: this.programsection?.nativeElement.offsetTop + 400,
        behavior: 'smooth',
      });
      this.activeSection = 'Program'
    }
    if (value == 'Policies') {
      window.scrollTo({
        top: this.policiessection?.nativeElement.offsetTop + 400,
        behavior: 'smooth',
      });
      this.activeSection = 'Policies'
    }
  }
}
