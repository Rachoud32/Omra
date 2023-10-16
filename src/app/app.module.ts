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
import { SidebarFilterComponent } from './sidebar-filter/sidebar-filter.component';
import { NgxSliderModule } from 'ngx-slider-v2';

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
    SidebarFilterComponent,
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
    BrowserAnimationsModule,
    NgxDaterangepickerMd.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass:'toast-top-right',
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
