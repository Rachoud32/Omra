import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UmrahPackageRoutingModule } from './umrah-package-routing.module';
import { UmrahPackageComponent } from './umrah-package.component';
import { HotelPackageComponent } from './hotel-package/hotel-package.component';


@NgModule({
  declarations: [
    UmrahPackageComponent,
    HotelPackageComponent
  ],
  imports: [
    CommonModule,
    UmrahPackageRoutingModule
  ]
})
export class UmrahPackageModule { }
