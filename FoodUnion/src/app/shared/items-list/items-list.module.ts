import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ItemsListComponent } from './items-list.component';



@NgModule({
  declarations: [ItemsListComponent],
  imports: [CommonModule],
  exports: [ItemsListComponent],
})
export class ItemsListModule { }
