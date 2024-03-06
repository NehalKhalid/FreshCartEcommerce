import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{
  isLoading:boolean = true;
  brandList:Brand[]=[];
  constructor(private _ProductService:ProductService){
  }
  ngOnInit(): void {
    this._ProductService.getAllBrands().subscribe({
      next:(response)=>{
        this.isLoading = false;
        this.brandList = response.data
        console.log(response);
        console.log(this.brandList);
      },
      error:(err)=>{
        this.isLoading = false;
        console.log(err);
        
      }
    })
  }
}
