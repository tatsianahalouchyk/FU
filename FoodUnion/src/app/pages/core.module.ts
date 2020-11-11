import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { CloseBtnModule } from '../shared/close-btn/close-btn.module';
import { ErrorsModalComponent } from './errors-list/errors-modal/errors-modal.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersListComponent,
    ErrorsModalComponent,
  ],
  imports: [
    CommonModule,
    CloseBtnModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class PagesModule { }
