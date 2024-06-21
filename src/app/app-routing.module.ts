import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { DashboardComponent } from './private/pages/dashboard/dashboard.component';
import { ProductsComponent } from './private/pages/products/products.component';
import { Page404Component } from './public/pages/page-404/page-404.component';
import { NewProductComponent } from './private/pages/products/new-product/new-product.component';
import { UpdateProductComponent } from './private/pages/products/update-product/update-product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },                         // http://localhost:4200/
  { path: 'login', component: LoginComponent },                   // http://localhost:4200/login
  { path: 'register', component: RegisterComponent },             // http://localhost:4200/register
  { path: 'dashboard', component: DashboardComponent },           // http://localhost:4200/dashboard
  { path: '404', component: Page404Component },                   // http://localhost:4200/404
  { path: 'dashboard/products', component: ProductsComponent },   // http://localhost:4200/dashboard/products
  { path: 'dashboard/new-product', component: NewProductComponent },  // http://localhost:4200/dashboard/new-product
  { path: 'dashboard/edit-product', component: UpdateProductComponent },  // http://localhost:4200/dashboard/new-product
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
