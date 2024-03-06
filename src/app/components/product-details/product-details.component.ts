import { product } from 'src/app/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
  productId:string='';
  isLoading:boolean = true;
  productItem : any = {};
constructor(private _ProductService:ProductService,private _ActivatedRoute:ActivatedRoute ,private _CartService:CartService ,private toastr: ToastrService){
}
ngOnInit(): void {
  this._ActivatedRoute.params.subscribe(params=>{
    this.productId = params['id'];
    
    console.log(this.productId);
  });
  this._ProductService.getProductById(this.productId).subscribe({
    next:(response)=>{
      this.isLoading = false;
      this.productItem = response.data;
      console.log(this.productItem);
      
    }
  });
}
addProductToCart(productId:string){
  this._CartService.addProductToCart(productId).subscribe({
    next:(response)=>{
      this.toastr.success(response.message,'',{
        positionClass : 'toast-bottom-right',
        progressBar : true ,
        timeOut: 3000
      });
      this._CartService.noOfCartItems.next(response.numOfCartItems);
      console.log(response);
    },
    error:(err)=>{
      console.log(err);
      
    }
  });
}
}
