import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasModule } from './pizzas/pizzas.module';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'pizzas', loadChildren: () => import('./pizzas/pizzas.module').then(m => m.PizzasModule) }, 
  { path: 'my-orders', loadChildren: () => import('./my-orders/my-orders.module').then(m => m.MyOrdersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PizzasModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
