import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FemalesComponent } from '../../females/females.component';
import { MalesComponent } from '../../males/males.component'

const routes: Routes = [
  { path: 'females' , component: FemalesComponent },
  { path: 'males' , component: MalesComponent },
  { path: '' , redirectTo: '/home' , pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
