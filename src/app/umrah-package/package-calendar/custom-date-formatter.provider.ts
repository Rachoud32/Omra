import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomDateFormatter extends CalendarDateFormatter {
  // you can override any of the methods defined in the parent class
  override weekViewColumnHeader({ date, locale }: DateFormatterParams): string {
    const actualLocale = locale || 'defaultLocale';
    return formatDate(date, 'EEE', actualLocale);
  }

  override monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
    const actualLocale = locale || 'defaultLocale';
    return formatDate(date, 'EEE', actualLocale);
  }

}