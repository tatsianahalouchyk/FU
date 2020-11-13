import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { CloseBtnModule } from '../shared/close-btn/close-btn.module';
import { ItemsListModule } from '../shared/items-list/items-list.module';
import { ErrorsListComponent } from './errors-list/errors-list.component';
import { ErrorsModalComponent } from './errors-list/errors-modal/errors-modal.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NewUserModalComponent } from './users-list/new-user-modal/new-user-modal.component';

@NgModule({
  declarations: [
    UsersListComponent,
    ErrorsModalComponent,
    ErrorsListComponent,
    NewUserModalComponent,
  ],
  imports: [
    CommonModule,
    CloseBtnModule,
    ItemsListModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class PagesModule { }
