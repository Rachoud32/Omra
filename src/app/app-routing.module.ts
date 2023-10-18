import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { PreviewComponent } from './preview/preview.component';
import { FlightComponent } from './flight/flight.component';
import { FirstDestinationComponent } from './first-destination/first-destination.component';
import { SecondDestinationComponent } from './second-destination/second-destination.component';
import { FirstTransferComponent } from './first-transfer/first-transfer.component';
import { SecondTransferComponent } from './second-transfer/second-transfer.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', component: SearchFormComponent },
  {
    path: 'result',
    component: PreviewComponent,
    children: [
      { path: 'flight', component: FlightComponent },
      { path: 'first-destination', component: FirstDestinationComponent },
      { path: 'second-destination', component: SecondDestinationComponent },
      { path: 'first-transfer', component: FirstTransferComponent },
      { path: 'second-transfer', component: SecondTransferComponent },
      { path: 'summary', component: SummaryComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
