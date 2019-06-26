import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { UsersComponent } from './components/users/users.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserRolesComponent } from './components/userroles/userroles.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    children: [
      // {
      //
      // }
      {
        path: 'expenses',
        component: ExpensesComponent
      },

      {
        path: 'users',
        component: UsersComponent

      },

      {
        path: 'comments',
        component: CommentsComponent

      },

      {
        path: 'userroles',
        component: UserRolesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }