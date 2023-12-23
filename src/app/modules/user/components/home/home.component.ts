import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/bookState';
import { bookStateInterface } from 'src/app/store/appState';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  books!: Book[] | [];
  constructor(private store: Store<bookStateInterface> ,private router:Router) {}
  ngOnInit(): void {
    this.store.select("bookManagement").subscribe((data) => this.books = data)
  }

}
