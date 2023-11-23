import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  { path: '', component: AppComponent },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  { path: 'umrah-custom/result', loadChildren: () => import('./result/result.module').then(m => m.ResultModule) },
  { path: 'umrah-package/result', loadChildren: () => import('./umrah-package/umrah-package.module').then(m => m.UmrahPackageModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
