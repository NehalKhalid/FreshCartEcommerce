import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrandsComponent } from './components/brands/brands.component';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategorySliderComponent } from './components/category-slider/category-slider.component'
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { AllordersComponent } from './components/allorders/allorders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BrandsComponent,
    ProductsComponent,
    NotfoundComponent,
    CategoriesComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailsComponent,
    NavbarComponent,
    CategorySliderComponent,
    MainSliderComponent,
    SearchPipe,
    ShippingAddressComponent,
    AllordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
