import { CartService } from 'src/app/services/cart.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogIn:boolean = false;
  constructor(public _AuthService:AuthService,public _CartService:CartService){}
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>{
          if(this._AuthService.userData.getValue() !== null){
            this.isLogIn = true;
          }
          else{
            this.isLogIn = false;
          }
      }
    });
    
  }
}
