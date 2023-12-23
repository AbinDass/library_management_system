import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/bookState';
import { bookStateInterface } from 'src/app/store/appState';
import {addBooks} from '../../bookStore/book.action'
import {v4 as uuid} from 'uuid'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
})
export class AddbookComponent {
  bookForm!: FormGroup;

  constructor(private fb: FormBuilder, private store:Store<bookStateInterface>,private router:Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.bookForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required]],
      // image: [null, [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      available:['', [Validators.required, Validators.min(0)]],
      year: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    
    if (this.bookForm.valid) {

      // You can handle the form submission logic here
      const formData: Book = this.bookForm.value;
      console.log('Form submitted:', formData);
      
      const book = {...formData,...{_id: uuid()}}
      this.store.dispatch(
        addBooks(book)
        );
        this.router.navigate(['/adminhome'])
      
    } else {
      // Mark form controls as touched to display validation errors
      this.bookForm.markAllAsTouched();
    }
  }
}
