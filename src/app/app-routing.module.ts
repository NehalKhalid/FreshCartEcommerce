import { ShippingAddressComponent } from './components/shipping-address/shipping-address.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundError } from 'rxjs';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './guards/auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path:"" ,redirectTo:"/register", pathMatch:'full'},
  {path:'home' ,canActivate:[authGuard], component : HomeComponent , title : "Home"},
  {path:'productdetails/:id' ,canActivate:[authGuard], component : ProductDetailsComponent , title : "Product Details"},
  {path:'products' ,canActivate:[authGuard] , component : ProductsComponent , title : "Products"},
  {path:'cart' ,canActivate:[authGuard] , component : CartComponent , title : "Shipping Address"},
  {path:'shippingAddress/:id' ,canActivate:[authGuard] , component : ShippingAddressComponent , title : "Cart"},
  {path:'brands' ,canActivate:[authGuard] , component : BrandsComponent , title : "Brands"},
  {path:'categories' ,canActivate:[authGuard] , component : CategoriesComponent , title : "Categories"},
  {path:'login' , component : LoginComponent , title : "LogIn"},
  {path:'register' , component : RegisterComponent , title : "Register"},
  {path:'**' , component : NotfoundComponent , title : "NotFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
