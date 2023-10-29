import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchFormComponent } from './search-form/search-form.component';
import { PreviewComponent } from './preview/preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FlightComponent } from './flight/flight.component';
import { FirstDestinationComponent } from './first-destination/first-destination.component';
import { FirstTransferComponent } from './first-transfer/first-transfer.component';
import { GroundServicesComponent } from './ground-services/ground-services.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { NgxStarsModule } from 'ngx-stars';
import { SecondDestinationComponent } from './second-destination/second-destination.component';
import { SecondTransferComponent } from './second-transfer/second-transfer.component';
import { ToastrModule } from 'ngx-toastr';
import { TopFilterComponent } from './top-filter/top-filter.component';
import { NgxSliderModule } from 'ngx-slider-v2';
import { DestinationSidebarFilterComponent } from './destination-sidebar-filter/destination-sidebar-filter.component';
import { TransferSidebarFilterComponent} from './transfer-sidebar-filter/transfer-sidebar-filter.component';
import { FlightSidebarFilterComponent } from './flight-sidebar-filter/flight-sidebar-filter.component';
import { SummaryComponent } from './summary/summary.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingStepsComponent } from './booking-steps/booking-steps.component';
import { MotamarInfosComponent } from './motamar-infos/motamar-infos.component';
import { BookingsSidebarComponent } from './bookings-sidebar/bookings-sidebar.component'
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { FlightTopFilterComponent } from './flight-top-filter/flight-top-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    PreviewComponent,
    FlightComponent,
    FirstDestinationComponent,
    FirstTransferComponent,
    GroundServicesComponent,
    SecondDestinationComponent,
    SecondTransferComponent,
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
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgxSliderModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
