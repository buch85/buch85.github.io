import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BeastListComponent} from './beast-list/beast-list.component';
import {MydashboardComponent} from './mydashboard/mydashboard.component';

const routes: Routes = [
  {path: 'beasts', component: BeastListComponent},
  {path: 'dashboard', component: MydashboardComponent},
  {path: '', redirectTo: '/beasts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
