import { Component } from '@angular/core';
import { FormControl, FormGroup,Validator, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isLoading:boolean = false;
  apiError:string = '';
  registerForm:FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(15)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)]),
    rePassword: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
  } , {
    validators:this.checkRepasswordMatch
  })
  constructor(private _AuthService:AuthService,private _Router:Router){
  }
  submitRegister(data:FormGroup){
    this.isLoading = true ;
    console.log(data);
    // if(data.valid){
    //   this._AuthService.sginUp(data.value).subscribe({
    //     next:(response)=>{
    //       console.log(response);
    //       if(response.message === 'success'){
    //         this._Router.navigate(['/login']);
    //         this.isLoading = false;
    //       }
    //     },
    //     error:(err)=>{
    //       console.log(err);
    //       this.isLoading = false;
    //       this.apiError = err.error.message;
          
    //     }
    //   })
    //}
  }
  checkRepasswordMatch(form:any){
    if(form.get('password')?.value === form.get('rePassword')?.value){
      return null;
    }
    else{
      form.get('rePassword')?.setErrors(
        {
          rePasswordMatch : 'Repassword Not Match Password'
        }
      )
      return {
        rePasswordMatch : 'Repassword Not Match Password'
      }
    }
  }
}
