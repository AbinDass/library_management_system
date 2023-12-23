import { Component } from '@angular/core';
import { userData } from 'src/app/modules/auth/model/userData';
import { StorageService } from 'src/app/modules/auth/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private storageService:StorageService){}
  user = this.storageService.userSession
}
