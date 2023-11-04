import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { LightgalleryModule } from 'lightgallery/angular';
import { NgxStarsModule } from 'ngx-stars';
import { ToastrModule } from 'ngx-toastr';
import { NgxSliderModule } from 'ngx-slider-v2';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

//Components



@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SearchRoutingModule,
    NgbDatepickerModule,
    NgxSliderModule,
    NgbModule,
    RouterModule,
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

})
export class SearchModule { }
