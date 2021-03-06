import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'settings' },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'customers/add/', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'customers/edit/:id', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'customers/id/:id', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders/:id', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'settings', component: UserSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
