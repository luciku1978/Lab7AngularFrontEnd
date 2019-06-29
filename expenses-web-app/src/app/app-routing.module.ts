import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { UsersComponent } from './components/users/users.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserRolesComponent } from './components/userroles/userroles.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UsersGuard } from './guards/users.guard';
import { ExpensesGuard } from './guards/expenses.guard';
import { CommentsGuard } from './guards/comments.guard';
import { UserRolesGuard } from './guards/userroles.guard';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      // {
      //
      // }
      {
        path: 'expenses',
        component: ExpensesComponent,
        canActivate: [ExpensesGuard],
      },

      {
        path: 'users',
        component: UsersComponent,
        canActivate: [UsersGuard],

      },

      {
        path: 'comments',
        component: CommentsComponent,
        canActivate: [CommentsGuard],

      },

      {
        path: 'userroles',
        component: UserRolesComponent,
        canActivate: [UserRolesGuard],
      },

      


    ]
  },
{
  path: 'login',
  component: LoginComponent
},

{
  path: 'register',
  component: RegisterComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
