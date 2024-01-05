import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, CalendarDateFormatter, CalendarView } from 'angular-calendar';
import { CustomDateFormatter } from './custom-date-formatter.provider';

@Component({
  selector: 'app-package-calendar',
  templateUrl: './package-calendar.component.html',
  styleUrls: ['./package-calendar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
})

export class PackageCalendarComponent {

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events = [
    {
      title: '500',
      start: new Date(2023, 11, 20, 10, 0),
    },
    {
      title: '890',
      start: new Date(2023, 11, 21, 12, 30),
    },
    {
      title: '690',
      start: new Date(2023, 11, 25, 15, 0), 
    },
    {
      title: '1020',
      start: new Date(2023, 11, 31), 
    },
    {
      title: '1500',
      start: new Date(2024, 0, 8),
    },
    {
      title: '1500',
      start: new Date(2024, 0, 9),
    },
    {
      title: '1500',
      start: new Date(2024, 0, 10),
    },
    {
      title: '920',
      start: new Date(2024, 0, 15),
    },
    {
      title: '920',
      start: new Date(2024, 0, 16),
    },
    {
      title: '920',
      start: new Date(2024, 0, 17),
    },
    {
      title: '860',
      start: new Date(2024, 0, 20),
    },
    {
      title: '860',
      start: new Date(2024, 0, 21),
    },
    {
      title: '860',
      start: new Date(2024, 0, 31),
    },
    {
      title: '860',
      start: new Date(2024, 1, 1),
    },
    {
      title: '860',
      start: new Date(2024, 1, 2),
    },
    {
      title: '860',
      start: new Date(2024, 1, 3),
    },
    {
      title: '860',
      start: new Date(2024, 1, 10),
    },
    {
      title: '860',
      start: new Date(2024, 1, 11),
    }
  ]
}