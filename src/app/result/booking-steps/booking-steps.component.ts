import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-booking-steps',
  templateUrl: './booking-steps.component.html',
  styleUrls: ['./booking-steps.component.css']
})
export class BookingStepsComponent implements OnInit, OnDestroy {
  private localStorageSubject = new Subject<string | null>();
  localStorageSubscription?: Subscription;
  faCaretDown = faCaretDown
  linkValue: string = ''
  BookingSteps: boolean = true;
  localStorageSteps: any
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if ((val.url == '/' || val.url == '/umrah-custom/result/payment') || (val.url == '/' || val.url == '/umrah-custom/result/motamar-informations')) {
          this.BookingSteps = false;
        } else {
          this.BookingSteps = true;
        }
      }
    });

    window.addEventListener('storage', (event: StorageEvent) => {
      if (event.key === 'steps') {
        this.localStorageSubject.next(event.newValue);
      }
      console.log(event);

    });
  }

  ngOnInit(): void {
    this.updateLinkValue(); // Initialize the linkValue property
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateLinkValue();
      }
    });
    this.localStorageSteps = JSON.parse(localStorage.getItem('steps') || '')
    this.localStorageSubscription = this.localStorageSubject.asObservable().subscribe((newValue: any) => {
      this.localStorageSteps = newValue;
      console.log(newValue);

      // Handle the updated value as needed
    });

  }
  getLocalStorageChanges() {
    return this.localStorageSubject.asObservable();
  }
  ngOnDestroy() {
    this.localStorageSubscription?.unsubscribe();
  }

  private updateLinkValue(): void {
    this.linkValue = this.activatedRoute.snapshot.firstChild?.routeConfig?.path || '';
  }



}
