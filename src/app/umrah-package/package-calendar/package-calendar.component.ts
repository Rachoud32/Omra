import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-package-calendar',
  templateUrl: './package-calendar.component.html',
  styleUrls: ['./package-calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PackageCalendarComponent {

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events = [
    {
      title: '500',
      start: new Date(2023, 11, 20, 10, 0), // December 20, 2023, 10:00 AM
      color: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
      }
    },
    {
      title: '890',
      start: new Date(2023, 11, 21, 12, 30), // December 21, 2023, 12:30 PM
      color: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
      }
    },
    {
      title: '690',
      start: new Date(2023, 11, 25, 15, 0), // December 25, 2023, 3:00 PM
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      }
    },
    {
      title: '1020',
      start: new Date(2023, 11, 31), // December 31, 2023 (whole day)
      end: new Date(2024, 0, 1), // January 1, 2024 (whole day)
      color: {
        primary: '#790700',
        secondary: '#FAD0C3'
      }
    }
  ]


}