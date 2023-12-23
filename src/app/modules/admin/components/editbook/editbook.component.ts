import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/bookState';
import { bookStateInterface } from 'src/app/store/appState';
import { updateBooks } from '../../bookStore/book.action';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css'],
})
export class EditbookComponent implements OnInit{
  bookid!:string
  editedBook!:Book
  getbook:boolean = false
  editbookForm!: FormGroup;
  constructor(private fb: FormBuilder,private routes: ActivatedRoute,private store: Store<bookStateInterface>) {}
  ngOnInit(): void {
    this.routes.paramMap.subscribe((param) => {
      this.bookid = param.get('bookid')!; 
    });
    this.initForm();

  }

 
  

  initForm(): void {
    this.editbookForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      author: ['', [Validators.required]],
      // image: [null, [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      available:['', [Validators.required, Validators.min(0)]],
      year: ['', [Validators.required]],
    });
  }

  editSubmit(): void {
    
    if (this.editbookForm.valid) {

      // You can handle the form submission logic here
      const formData: Book = this.editbookForm.value;
      console.log('Form submitted:', formData);
      
      // const book = {...formData,...{_id: uuid()}}
      // this.store.dispatch(
      //   addBooks(book)
      // );
      console.log(this.bookid)
      this.store.select("bookManagement").subscribe((data) => {
        data.map(book => {
          if(book._id === this.bookid){
            this.getbook = true
          }
        })
      })

      if(this.getbook){
        this.store.dispatch(
          updateBooks({_id:this.bookid,Books:formData})
        ); 
      }
    } else {
      // Mark form controls as touched to display validation errors
      this.editbookForm.markAllAsTouched();
    }
  }
}