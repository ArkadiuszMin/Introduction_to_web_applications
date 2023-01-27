import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { TripDetailedComponent } from './trip-detailed/trip-detailed.component';
import { TripHistoryComponent } from './trip-history/trip-history.component';
import { TripListComponent } from './trip-list/trip-list.component';

const routes: Routes = [
  {path: 'trip-list/:id', component: TripDetailedComponent},
  {path: '', component: HomepageComponent},
  {path: 'trip-list', component: TripListComponent},
  {path: 'form', component: FormComponent},
  {path: 'koszyk', component: KoszykComponent},
  {path: 'trip-history', component: TripHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
