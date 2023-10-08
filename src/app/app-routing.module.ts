import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { PreviewComponent } from './preview/preview.component';
import { FlightComponent } from './flight/flight.component';
import { FirstDestinationComponent } from './first-destination/first-destination.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  { path: '', component: SearchFormComponent },
  {
    path: 'result',
    component: PreviewComponent,
    children: [
      { path: 'flight', component: FlightComponent },
      { path: 'first-destination', component: FirstDestinationComponent },
      { path: 'transfer', component: TransferComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
