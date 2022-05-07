import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PseudokedexComponent } from './pseudokedex/pseudokedex.component';

const routes: Routes = [
  {path:'', component:PseudokedexComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
