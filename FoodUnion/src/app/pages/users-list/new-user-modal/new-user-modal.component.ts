import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-user-modal',
  templateUrl: './new-user-modal.component.html',
  styleUrls: ['./new-user-modal.component.scss']
})
export class NewUserModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewUserModalComponent>
  ) { }

  ngOnInit(): void {
  }

  onCloseModal(e: boolean) {
    this.dialogRef.close(e);
  }

}
