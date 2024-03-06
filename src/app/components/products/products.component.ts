import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:product[]=[];
  isLoading:boolean = true;
  term:string = "";
  constructor(private _ProductService : ProductService,private _CartService:CartService ,private toastr: ToastrService){
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this._ProductService.getAllProducts().subscribe({
      next:(response)=>{
        this.isLoading = false;
        console.log(response);
        this.productList = response.data
        console.log(this.productList);
      },
      error : (err)=>{
        console.log(err);
        this.isLoading = false;
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
