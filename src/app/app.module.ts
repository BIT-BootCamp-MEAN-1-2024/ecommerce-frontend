import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { DashboardComponent } from './private/pages/dashboard/dashboard.component';
import { ProductsComponent } from './private/pages/products/products.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { Page404Component } from './public/pages/page-404/page-404.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NewProductComponent } from './private/pages/products/new-product/new-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './private/pages/products/update-product/update-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    Page404Component,
    NewProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
