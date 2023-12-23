import { createReducer, on } from '@ngrx/store';
import {addBooks, updateBooks} from './book.action'
import { Book } from 'src/app/models/bookState';
import { state } from '@angular/animations';
import { borrowBook, returnBooks } from '../../auth/userStore/user.action';

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
      }),

      on(borrowBook, (state, action) => {
          const index = state.findIndex((data)=> data._id === action.id)
          console.log(index)
          let elem = {...state[index]}
          console.log(elem)
          if(elem?.borrowedUsers){
              elem.borrowedUsers.push(action.emailid)
        }else{
            console.log('else')
            elem.borrowedUsers = [action.emailid]
        }

        if(elem.available !== 0) {
            elem.available-=1
        }
        const newState = [...state]
        newState[index] = elem 
        console.log(state , elem ,'fhjhjh')
        return newState
    }),

    on(returnBooks, (state, action) => {
        const index = state.findIndex((data)=> data._id === action.id)
        let elem = {...state[index]}
        if(elem?.borrowedUsers){
           elem.borrowedUsers = elem.borrowedUsers.filter((data)=> data!== action.emailid)
      }

      if(elem.available !== -1) {
          elem.available +=1
      }
      const newState = [...state]
      newState[index] = elem 
      return newState
  })
) 