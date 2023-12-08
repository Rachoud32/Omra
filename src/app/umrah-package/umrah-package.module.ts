import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UmrahPackageRoutingModule } from './umrah-package-routing.module';
import { UmrahPackageComponent } from './umrah-package.component';
import { PackageItemComponent } from './package-item/package-item.component';
import { NgxStarsModule } from 'ngx-stars';


@NgModule({
  declarations: [
    UmrahPackageComponent,
    PackageItemComponent,
    
  ],
  imports: [
    CommonModule,
    UmrahPackageRoutingModule,
    NgxStarsModule,
  ]
})
export class UmrahPackageModule { }
