import { Routes } from '@angular/router';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { MyOrderComponent } from './pages/my-order/my-order.component';

export const routes: Routes = [
  {
    path: '', component: MyOrdersComponent
  },
  {
    path: 'my-order/:id', component: MyOrderComponent
  },
  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },
];