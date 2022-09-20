import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasModule } from './pizzas/pizzas.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), PizzasModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
