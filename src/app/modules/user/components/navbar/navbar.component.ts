import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/modules/auth/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private storageService:StorageService, private router:Router){}
  logOut(){
    this.storageService.userSession = {isLogin:false,edited:'user'}
    this.router.navigate([''])
  }
}
