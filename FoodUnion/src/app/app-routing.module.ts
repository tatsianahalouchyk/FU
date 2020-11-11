import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { LoginComponent } from './login/login.component';
import { ErrorsListComponent } from './pages/errors-list/errors-list.component';
import { UsersListComponent } from './pages/users-list/users-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: 'users-list', component: UsersListComponent },
      { path: 'errors-list', component: ErrorsListComponent },
    ]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
