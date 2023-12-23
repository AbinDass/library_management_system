import { Injectable } from '@angular/core';
import { userData } from './model/userData';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

 set userSession(userData:userData){
  if(userData.edited === 'user') {
    const oldData = this.userSession
    if(oldData.user){
      userData = Object.assign(oldData.user, userData)
    }
  }else{
    const oldData = this.userSession
    if(oldData.admin){
      userData = Object.assign(oldData.admin, userData)
    }
  }
    delete userData.edited
    if(userData.role === 'user') localStorage.setItem('userdata', JSON.stringify(userData))
    else localStorage.setItem('admindata', JSON.stringify(userData))
  }

  get userSession(): { user: userData | null, admin: userData | null } {
    const user = JSON.parse(localStorage.getItem('userdata')!) as userData;
    const admin = JSON.parse(localStorage.getItem('admindata')!) as userData;

    return { user, admin };
  }
}
