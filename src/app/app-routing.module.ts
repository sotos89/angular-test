import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MalesComponent } from './males/males.component';
import { FemalesComponent } from './females/females.component';

const routes: Routes = [
  {path: 'males', component: MalesComponent},
  {path: 'females', component: FemalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
