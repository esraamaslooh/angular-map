import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RequestMapComponent} from "./components/request-map/request-map.component";
import {RequestDetailsComponent} from "./components/request-details/request-details.component";

const routes: Routes = [
  { path: '', redirectTo: 'request-map', pathMatch: 'full' },
  { path: 'request-map', component: RequestMapComponent },
  { path: 'request-details', component: RequestDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
