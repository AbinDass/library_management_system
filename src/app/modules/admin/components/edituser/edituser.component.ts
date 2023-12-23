import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { Store } from '@ngrx/store';
import { registerError } from 'src/app/modules/auth/model/registerErrors';
import { userData } from 'src/app/modules/auth/model/userData';
import { updateUser } from 'src/app/modules/auth/userStore/user.action';
import { userStateInterface } from 'src/app/store/appState';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  email!:string;
  getMail:boolean = false
  error: registerError = {
    fullname: '',
    emailid: '',
    phone: '',
    role:'',
    
  };

  constructor(private routes: ActivatedRoute, private store: Store<userStateInterface>){}
ngOnInit(): void {
  
    this.routes.paramMap.subscribe((param) => {
      this.email = param.get('mailid')!; 
    });
    
  
}
  registerForm = new FormGroup({
    fullname: new FormControl(null, [
      Validators.required,
      Validators.maxLength(20),
      Validators.minLength(3),
    ]),
    emailid: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern('^[0-9]{10}$'),
    ]),
   
  });


  submitRegisterForm(){

    let fullname = this.registerForm.value.fullname!;
    let emailid = this.registerForm.value.emailid!;
    let phone = this.registerForm.value.phone!;
    
    this.store.select("userManagement").subscribe((data) => {

      data.map(data => {
        console.log(data.emailid , this.email)
        if(data.emailid === this.email){
          alert('hii')
          this.getMail = true
        }
      })
    })
    const formData: userData = {fullname,emailid,phone};

    if (this.getMail)this.store.dispatch(
      updateUser({emailid:this.email,users:formData})
    ); 
     
  }

  registorErrors() {
    //fullname error
    if (
      this.registerForm.controls.fullname.touched &&
      this.registerForm.controls.fullname.invalid
    ) {
      if (this.registerForm.controls.fullname.getError('required'))
        this.error.fullname = ' your name is required';
      else if (this.registerForm.controls.fullname.getError('maxlength'))
        this.error.fullname = 'maximum length is 20 characters';
      else if (this.registerForm.controls.fullname.getError('minlength'))
        this.error.fullname = 'min 3 letter required';
    } else this.error.fullname = '';

    // email error
    if (
      this.registerForm.controls.emailid.touched &&
      this.registerForm.controls.emailid.invalid
    ) {
      if (this.registerForm.controls.emailid.getError('required'))
        this.error.emailid = ' E mail is required';
      else if (this.registerForm.controls.emailid.getError('email'))
        this.error.emailid = ' please enter a valid email';
    } else this.error.emailid = '';

    // phone error
    if (
      this.registerForm.controls.phone.touched &&
      this.registerForm.controls.phone.invalid
    ) {
      if (this.registerForm.controls.phone.getError('required'))
        this.error.phone = 'phone number is required';
      else if (this.registerForm.controls.phone.getError('maxlength'))
        this.error.phone = 'maximum 10 numbers required';
      else if (this.registerForm.controls.phone.getError('minlength'))
        this.error.phone = 'minimum 10 mumbers required';
      else if (this.registerForm.controls.phone.getError('pattern'))
        this.error.phone = 'phone should be  mumbers';
    } else this.error.phone = ' ';
   
  }
}
