import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UmrahPackageComponent } from './umrah-package.component';

const routes: Routes = [{ path: 'umrah-package/result', component: UmrahPackageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UmrahPackageRoutingModule { }
