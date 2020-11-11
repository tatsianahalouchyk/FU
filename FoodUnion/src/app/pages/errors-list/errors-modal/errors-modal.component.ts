import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-errors-modal',
  templateUrl: './errors-modal.component.html',
  styleUrls: ['./errors-modal.component.scss']
})
export class ErrorsModalComponent implements OnInit {
   visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // TODO update any type:
  emailList: any[] = [
    {name: 'user_1@gmail.com'},
    {name: 'user_2@gmail.com'},
    {name: 'user_3@gmail.com'},
  ];


  constructor(
    public dialogRef: MatDialogRef<ErrorsModalComponent>
  ) { }

  ngOnInit(): void {
  }

  onCloseModal(e: boolean) {
    this.dialogRef.close(e);
  }

  onSave() {
    console.log('onSave');
    this.dialogRef.close(true);
  }

    add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add one more e-mail:
    if ((value || '').trim()) {
      this.emailList.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  // TODO update any type:
  remove(fruit: any): void {
    const index = this.emailList.indexOf(fruit);

    if (index >= 0) {
      this.emailList.splice(index, 1);
    }
  }

}
