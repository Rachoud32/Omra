import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UmrahPackageRoutingModule } from './umrah-package-routing.module';
import { UmrahPackageComponent } from './umrah-package.component';
import { PackageItemComponent } from './package-item/package-item.component';
import { NgxStarsModule } from 'ngx-stars';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { PackageBookingsSidebarComponent } from './package-bookings-sidebar/package-bookings-sidebar.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PackageSearchBarComponent } from './package-search-bar/package-search-bar.component';
import { PackageCalendarComponent } from './package-calendar/package-calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PackageCalenderHeaderComponent } from './package-calender-header/package-calender-header.component';
import { PackageBookingsMobComponent } from './package-bookings-mob/package-bookings-mob.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PackageExtrasComponent } from './package-extras/package-extras.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    UmrahPackageComponent,
    PackageItemComponent,
    PackageDetailsComponent,
    PackageBookingsSidebarComponent,
    PackageSearchBarComponent,
    PackageCalendarComponent,
    PackageCalenderHeaderComponent,
    PackageBookingsMobComponent,
    PackageExtrasComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    CommonModule,
    UmrahPackageRoutingModule,
    NgxStarsModule,
    LightgalleryModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-top-right',
      progressBar: true,
      preventDuplicates: true,
      enableHtml: true
    }),

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UmrahPackageModule { }
