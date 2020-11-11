import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CloseBtnComponent } from './close-btn.component';

@NgModule({
  declarations: [CloseBtnComponent],
  imports: [
    CommonModule
  ],
  exports: [CloseBtnComponent]
})
export class CloseBtnModule { }
