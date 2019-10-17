import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchFlightsComponent } from '../app/components/search-flights/search-flights.component';
import { ConfirmBookingComponent } from './components/confirm-booking/confirm-booking.component';
import { ConfirmTicketComponent } from './components/confirm-ticket/confirm-ticket.component';


const routes: Routes = [
  {
    path:'',
    component: SearchFlightsComponent
  },
  {
    path:'conform-booking/:id',
    component: ConfirmBookingComponent
  },
  {
    path:'confirm-ticket',
    component: ConfirmTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
