import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartId:string = '';
  errMessage:string = '';
  isLoading:boolean = true;
  productList:any[]=[];
  totalPrice:number = 0;
  numOfCartItems:number = 0;
constructor(private _CartService:CartService){
}
ngOnInit(): void {
  this.getLoggedUserCart();
}
getLoggedUserCart(){
  this._CartService.getLoggedUserCart().subscribe({
    next:(response)=>{
      this.isLoading = false;
      this.numOfCartItems = response.numOfCartItems;
      this.totalPrice = response.data.totalCartPrice;
      this.productList = response.data.products;
      this.cartId = response.data._id;
      console.log(response);
      console.log(this.totalPrice,this.numOfCartItems,this.productList);
      
    },
    error:(err)=>{
      this.isLoading = false;
      this.errMessage = err.error.message;
      console.log(err);
    }
  });
}
removeProductFromCart(productId:string){
this._CartService.removeProductFromCart(productId).subscribe({
  next:(response)=>{
    this.productList = response.data.products;
    this.totalPrice = response.data.totalCartPrice;
    this.numOfCartItems = response.numOfCartItems;
    this._CartService.noOfCartItems.next(response.numOfCartItems);
    console.log(response);
  },
  error:(err)=>{
    console.log(err);
  }
});
}
clearCart(){
this._CartService.clearCart().subscribe({
  next:(response)=>{
    this.productList = [];
    this.totalPrice = 0;
    this.numOfCartItems = 0;
    this._CartService.noOfCartItems.next(0);
    this.errMessage = 'Your Cart Is Empty';
    console.log(response);
    
  },
  error:(err)=>{
    console.log(err);
  }
});

}
updateProductQuantityCart(productId:string,count:number){
this._CartService.updateProductQuantityCart(productId,count).subscribe({
  next:(response)=>{
    this.productList = response.data.products;
    this.totalPrice = response.data.totalCartPrice;
    this.numOfCartItems = response.numOfCartItems;
    console.log(response);
    
  },
  error:(err)=>{
    console.log(err);
  }
});
}
}
