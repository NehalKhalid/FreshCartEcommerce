import { Component, OnInit } from '@angular/core';
import { CategoryItem } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  isLoading:boolean = true;
categoryList:CategoryItem[]=[];
constructor(private _ProductService:ProductService){
}
ngOnInit(): void {
  this._ProductService.getAllCategories().subscribe({
    next:(response)=>{
      this.isLoading = false;
      this.categoryList = response.data
      console.log(response);
      console.log(this.categoryList);
    },
    error:(err)=>{
      this.isLoading = false;
      console.log(err);
      
    }
  })
}

}
