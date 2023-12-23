import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { registerError } from 'src/app/modules/auth/model/registerErrors';
import { userData } from 'src/app/modules/auth/model/userData';
import { StorageService } from 'src/app/modules/auth/storage.service';
import { userStateInterface } from 'src/app/store/appState';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css'],
})
export class UpdateprofileComponent {
  email!: string;
  getMail: boolean = false;
  error: registerError = {
    fullname: '',
    emailid: '',
    phone: '',
    role: '',
  };

  constructor(
    private router: Router,
    private storageService: StorageService,
    private store: Store<userStateInterface>
  ) {}

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

  submitprofile() {
    let fullname = this.registerForm.value.fullname!;
    let emailid = this.registerForm.value.emailid!;
    let phone = this.registerForm.value.phone!;


    this.storageService.userSession = { fullname, emailid, phone, edited:'user' };
    this.router.navigate(['profile']);
    
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
