import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarDateFormatter, CalendarView } from 'angular-calendar';
// import { CustomDateFormatter } from './custom-date-formatter.provider';

@Component({
  selector: 'app-package-calendar',
  templateUrl: './package-calendar.component.html',
  styleUrls: ['./package-calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarDateFormatter,
      // useClass: CustomDateFormatter,
    },
  ],
})

export class PackageCalendarComponent {

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events = [
    {
      title: '500',
      start: new Date(2023, 11, 20, 10, 0), // December 20, 2023, 10:00 AM
    },
    {
      title: '890',
      start: new Date(2023, 11, 21, 12, 30), // December 21, 2023, 12:30 PM
    },
    {
      title: '690',
      start: new Date(2023, 11, 25, 15, 0), // December 25, 2023, 3:00 PM
    },
    {
      title: '1020',
      start: new Date(2023, 11, 31), // December 31, 2023 (whole day)
      end: new Date(2024, 0, 1), // January 1, 2024 (whole day)
    }
  ]


}