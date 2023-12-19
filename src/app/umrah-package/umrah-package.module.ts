import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    UmrahPackageComponent,
    PackageItemComponent,
    PackageDetailsComponent,
    PackageBookingsSidebarComponent,
    PackageSearchBarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    CommonModule,
    UmrahPackageRoutingModule,
    NgxStarsModule,
    LightgalleryModule
  ]
})
export class UmrahPackageModule { }
