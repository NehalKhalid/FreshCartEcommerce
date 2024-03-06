import { BehaviorSubject, Observable, count } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl:string = 'https://ecommerce.routemisr.com/';
  headers ={
    token : localStorage.getItem('userToken') || ''
  }
  noOfCartItems = new BehaviorSubject(0);
  constructor(private _HttpClient:HttpClient) {
    this.getLoggedUserCart().subscribe({
      next:(response)=>{
        this.noOfCartItems.next(response.numOfCartItems)  ;
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
        
      }
    });
  }
  addProductToCart(productId:string):Observable<any>
  {
    return this._HttpClient.post(`${this.baseUrl}api/v1/cart`,
    {
      productId:productId
    }
    ,{
      headers : this.headers
    })
  }
  getLoggedUserCart():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}api/v1/cart`,
    {
      headers : this.headers
    })
  }
  removeProductFromCart(productId:string):Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}api/v1/cart/${productId}`,
    {
      headers : this.headers
    })
  }
  updateProductQuantityCart(productId:string,count:number):Observable<any>
  {
    return this._HttpClient.put(`${this.baseUrl}api/v1/cart/${productId}`,
    {
      count:count
    },
    {
      headers : this.headers
    })
  }
  clearCart():Observable<any>
  {
    return this._HttpClient.delete(`${this.baseUrl}api/v1/cart`,
    {
      headers : this.headers
    })
  }

}
