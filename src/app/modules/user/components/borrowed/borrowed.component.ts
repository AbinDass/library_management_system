import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/bookState';
import { StorageService } from 'src/app/modules/auth/storage.service';
import { returnBooks } from 'src/app/modules/auth/userStore/user.action';
import { bookStateInterface } from 'src/app/store/appState';

@Component({
  selector: 'app-borrowed',
  templateUrl: './borrowed.component.html',
  styleUrls: ['./borrowed.component.css']
})
export class BorrowedComponent implements OnInit{
  borrow:boolean = false
  
  borrowedbooks!:Book[] | []
  constructor(private store:Store<bookStateInterface>, private storageService:StorageService){}
  ngOnInit(): void {
    this.borrow = true
    const email = this.storageService.userSession.user?.emailid!
    this.store.select('bookManagement').subscribe((data) =>
    {
      this.borrowedbooks = data.filter((book)=> book.borrowedUsers.includes(email) )
    } 
    )
  }

  returnBook(bookid:string){
    const email = this.storageService.userSession.user?.emailid!
    this.store.dispatch(
      returnBooks({id:bookid,emailid:email})
    )
  }
}
