import { createReducer, on } from '@ngrx/store';
import {addBooks, updateBooks} from './book.action'
import { Book } from 'src/app/models/bookState';
import { state } from '@angular/animations';

export const initialState: Book[] | [] = []
export const bookReducer = createReducer(
    initialState,
   
    on(addBooks, (state, action) => {
        console.log(action,'my action')
      return [  ...state, action ]
    }),
    
    on(updateBooks, (state, action) => {
        const updatedState = state.map((book) =>
          book._id === action._id ? { ...book, ...action.Books } : book
        );
        return updatedState;
      })
)  