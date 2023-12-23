import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { ListbooksComponent } from './components/listbooks/listbooks.component';
import { EditbookComponent } from './components/editbook/editbook.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { EdituserComponent } from './components/edituser/edituser.component';

const routes: Routes = [
  {path:'adminhome', component:AdminhomeComponent,children:[
    {path:'',component:ListbooksComponent},
    {path:'addbooks',component:AddbookComponent},
    {path:'editbook/:bookid',component:EditbookComponent},
    {path:'userlist',component:UserlistComponent},
    {path:'updateuser/:mailid',component:EdituserComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
