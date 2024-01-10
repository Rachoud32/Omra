import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-bookings-mob',
  templateUrl: './package-bookings-mob.component.html',
  styleUrls: ['./package-bookings-mob.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0,
        display: 'none'
      })),
      state('*', style({
        opacity: 1,
        display: 'block'
      })),
      transition('void <=> *', animate(300)),
    ]),
  ],
})
export class PackageBookingsMobComponent implements OnInit {
  @Input() eventgoToNextStep!: Function;
  isCollapsed = true;

  ngOnInit(): void {
    // You can add any initialization logic here
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  goToNextStep() {
    if (this.eventgoToNextStep) {
      this.eventgoToNextStep()
    }
  }
}
