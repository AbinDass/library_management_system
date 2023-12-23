import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/bookState';
import { bookStateInterface } from 'src/app/store/appState';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css'],
})
export class ListbooksComponent implements OnInit {
  constructor(private store: Store<bookStateInterface> ,private router:Router) {}
  books!: Book[] | [];
  ngOnInit(): void {
    this.store.select("bookManagement").subscribe((data) => this.books = data)
  }

  toAddpage(){
    this.router.navigate(['/adminhome/addbooks'])
  }
}
