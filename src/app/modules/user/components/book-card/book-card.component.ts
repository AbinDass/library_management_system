import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/bookState';
import { StorageService } from 'src/app/modules/auth/storage.service';
import { borrowBook } from 'src/app/modules/auth/userStore/user.action';
import { bookStateInterface } from 'src/app/store/appState';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input() books: Book[] = [];
  @Input() borrow!: boolean;

  constructor(private store:Store<bookStateInterface>, private storageService:StorageService, private router:Router){}
  borrowBooks(bookid:string){
    const email = this.storageService.userSession.user?.emailid!
    this.store.dispatch(
      borrowBook({emailid:email, id:bookid})

    )
  // this.router.navigate(['/borrowed'])

  }
}
