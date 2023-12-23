import { createReducer, on } from '@ngrx/store';
import { userData } from '../model/userData';
import { addUser, updateUser } from './user.action';
export const initialState: userData[] | [] = []
export const userReducer = createReducer(
    initialState,
   
    on(addUser, (state, action) => {
        console.log(action,'my action')
      return [  ...state, action ]
    }),
    

    on(updateUser, (state, action) => {
        console.log('reducer here')
        const updatedState = state.map((user) =>
          user.emailid === action.emailid ? { ...user, ...action.users } : user
        );
        return updatedState;
      })    

    
)  