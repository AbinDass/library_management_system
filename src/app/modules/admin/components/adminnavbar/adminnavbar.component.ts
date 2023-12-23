import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/modules/auth/storage.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent {
 
    constructor(private storageService:StorageService, private router:Router){}
  logOut(){
    this.storageService.userSession = {isLogin:false,edited:'admin'}
    this.router.navigate([''])
  }
  
}
