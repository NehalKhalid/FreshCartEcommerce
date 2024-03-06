import { Component } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean = false;
  apiError:string = '';
  logInForm:FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)])
  })
  constructor(private _AuthService:AuthService,private _Router:Router){
  }
  submitLogIn(data:FormGroup){
    this.isLoading = true ;
    console.log(data);
    if(data.valid){
      this._AuthService.sginIn(data.value).subscribe({
        next:(response)=>{
          console.log(response);
          if(response.message === 'success'){
            localStorage.setItem('userToken' , response.token);
            this._AuthService.decodeUserToken();
            this._Router.navigate(['/home']);
            this.isLoading = false;
          }
        },
        error:(err)=>{
          console.log(err);
          this.isLoading = false;
          this.apiError = err.error.message;
        }
      })
    }
  }
}
