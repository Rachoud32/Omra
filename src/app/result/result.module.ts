import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule, NgbDatepickerModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { LightgalleryModule } from 'lightgallery/angular';
import { NgxStarsModule } from 'ngx-stars';
import { ToastrModule } from 'ngx-toastr';
import { NgxSliderModule } from 'ngx-slider-v2';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './result.component';
import { FlightComponent } from '../result/flight/flight.component';
import { FirstDestinationComponent } from '../result/first-destination/first-destination.component';
import { GroundServicesComponent } from '../result/ground-services/ground-services.component';
import { SecondDestinationComponent } from '../result/second-destination/second-destination.component';
import { TopFilterComponent } from '../result/top-filter/top-filter.component';
import { DestinationSidebarFilterComponent } from '../result/destination-sidebar-filter/destination-sidebar-filter.component';
import { TransferSidebarFilterComponent } from '../result/transfer-sidebar-filter/transfer-sidebar-filter.component';
import { FlightSidebarFilterComponent } from '../result/flight-sidebar-filter/flight-sidebar-filter.component';
import { SummaryComponent } from '../result/summary/summary.component';
import { SearchBarComponent } from '../result/search-bar/search-bar.component';
import { PaymentComponent } from '../result/payment/payment.component';
import { BookingStepsComponent } from '../result/booking-steps/booking-steps.component';
import { MotamarInfosComponent } from '../result/motamar-infos/motamar-infos.component';
import { BookingsSidebarComponent } from '../result/bookings-sidebar/bookings-sidebar.component';
import { FlightTopFilterComponent } from '../result/flight-top-filter/flight-top-filter.component';
import { TransferTopFilterComponent } from '../result/transfer-top-filter/transfer-top-filter.component';
import { TransferPeriodTopFilterComponent } from '../result/transfer-period-top-filter/transfer-period-top-filter.component';
import { TransferFirstFilterComponent } from '../result/transfer-first-filter/transfer-first-filter.component';
import { DestinationTopFilterComponent } from '../result/destination-top-filter/destination-top-filter.component';
import { BookingsMobComponent } from '../result/bookings-mob/bookings-mob.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [
    ResultComponent,
    FlightComponent,
    FirstDestinationComponent,
    GroundServicesComponent,
    SecondDestinationComponent,
    TopFilterComponent,
    DestinationSidebarFilterComponent,
    TransferSidebarFilterComponent,
    FlightSidebarFilterComponent,
    SummaryComponent,
    SearchBarComponent,
    PaymentComponent,
    BookingStepsComponent,
    MotamarInfosComponent,
    BookingsSidebarComponent,
    FlightTopFilterComponent,
    TransferTopFilterComponent,
    TransferPeriodTopFilterComponent,
    TransferFirstFilterComponent,
    DestinationTopFilterComponent,
    BookingsMobComponent,
    TransferComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgxSliderModule,
    NgbModule,
    RouterModule,
    ResultRoutingModule,
    NgbDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStarsModule,
    FontAwesomeModule,
    CarouselModule,
    LightgalleryModule,
    NgSelectModule,
    BrowserAnimationsModule,
    NgOptionHighlightModule,
    NgbModule,
    NgxDaterangepickerMd.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-top-right',
      progressBar: true,
      preventDuplicates: true,
      enableHtml: true
    }),
    NgbProgressbarModule
  ],
  providers: [],
  bootstrap: [ResultComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ResultModule { }
