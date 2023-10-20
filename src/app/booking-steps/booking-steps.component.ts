import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-booking-steps',
  templateUrl: './booking-steps.component.html',
  styleUrls: ['./booking-steps.component.css']
})
export class BookingStepsComponent {
  faCaretDown = faCaretDown
  linkValue: string = ''
  BookingSteps: boolean = true;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url == '/' || val.url == '/result/payment') {
          this.BookingSteps = false;
        } else {
          this.BookingSteps = true;
        }
      }
    });
  }
  
  ngOnInit(): void {
    this.updateLinkValue(); // Initialize the linkValue property
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateLinkValue();
      }
    });
  }

  private updateLinkValue(): void {
    this.linkValue = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || '';
  }

  

}
