import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result.component';
import { FlightComponent } from './flight/flight.component';
import { FirstDestinationComponent } from './first-destination/first-destination.component';
import { SecondDestinationComponent } from './second-destination/second-destination.component';
import { TransferComponent } from './transfer/transfer.component';
import { SummaryComponent } from './summary/summary.component';
import { MotamarInfosComponent } from './motamar-infos/motamar-infos.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: 'result', component: ResultComponent,
    children: [
      { path: 'flight', component: FlightComponent },
      { path: 'first-destination', component: FirstDestinationComponent },
      { path: 'second-destination', component: SecondDestinationComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'summary', component: SummaryComponent },
      { path: 'motamar-informations', component: MotamarInfosComponent },
      { path: 'payment', component: PaymentComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
