import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userData } from 'src/app/modules/auth/model/userData';
import { userStateInterface } from 'src/app/store/appState';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
  user!:userData[]
  constructor(private store:Store<userStateInterface>){}  
  ngOnInit(): void {
    this.store.select("userManagement").subscribe((data) => this.user = data)
  }
}
