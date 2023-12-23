import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../storage.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addUser } from '../../userStore/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    emailid : new FormControl(null, [Validators.required , Validators.email]),
    password : new FormControl(null, [Validators.required , Validators.minLength(6)]),
})

emailError!:string
passwordError!:string
constructor(private storageService:StorageService, private router:Router, private store:Store){}
  
   

loginSubmit() { 
  let email = this.loginForm.value.emailid ?? ""
  let password = this.loginForm.value.password ?? ""
 const data = this.storageService.userSession


 if(data.user?.emailid === email && data.user?.password === password){
   this.storageService.userSession = {isLogin:true,edited:'user'}
   this.router.navigate(['home'])
 console.log(data,'ooooo')

 } else if(data.admin?.emailid === email && data.admin?.password === password){
    this.storageService.userSession = {isLogin:true,edited:'admin'}
  this.router.navigate(['adminhome'])
 console.log(data,'iiohgikhf')


 }
 else{
  alert('password or email is missmatch')
 }

}


checkLoginErrors() {
  if(this.loginForm.controls.emailid.touched && this.loginForm.controls.emailid.invalid){
      if(this.loginForm.controls.emailid.getError('required')  ){
        this.emailError = " E mail is required"
      }else if(this.loginForm.controls.emailid.getError('email')  ){
        this.emailError = " please enter a valid email"
      }
  }else this.emailError = '' 

  if(this.loginForm.controls.password.touched && this.loginForm.controls.password.invalid){
    if(this.loginForm.controls.password.getError('required')){
      this.passwordError = "password required"
    }else if(this.loginForm.controls.password.getError('minlength')){
      this.passwordError = " password length should 6 "
    }
  }else this.passwordError = " "
}
}
