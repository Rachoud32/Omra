import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UmrahPackageComponent } from './umrah-package.component';
import { PackageDetailsComponent } from './package-details/package-details.component';

const routes: Routes = [{
  path: 'umrah-package/result', component: UmrahPackageComponent,
}, {
  path: 'umrah-package/result/package/:id', component: PackageDetailsComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UmrahPackageRoutingModule { }
