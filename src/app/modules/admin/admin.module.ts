import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './bookStore/book.reducer';
import { ListbooksComponent } from './components/listbooks/listbooks.component';
import { EditbookComponent } from './components/editbook/editbook.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { EdituserComponent } from './components/edituser/edituser.component';


@NgModule({
  declarations: [
    AdminhomeComponent,
    AdminnavbarComponent,
    AddbookComponent,
    ListbooksComponent,
    EditbookComponent,
    UserlistComponent,
    EdituserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('bookManagement', bookReducer),
  ]
})
export class AdminModule { }
