import { createAction, props } from '@ngrx/store';

import { Book } from 'src/app/models/bookState';

export const addBooks = createAction(
    '[book] addBooks',
    props<Book>()
  );
  
export const updateBooks = createAction(
    '[book] updateBooks',
    props<{_id:string,Books:Book}>()
  );