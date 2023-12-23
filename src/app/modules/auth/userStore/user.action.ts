import { createAction, props } from '@ngrx/store';
import { userData } from '../model/userData';



export const addUser = createAction(
    '[auth] addUsers',
    props<userData>()
  );
  

  export const updateUser = createAction(
    '[auth] updateUsers',
    props<{emailid:string,users:userData}>()
  );