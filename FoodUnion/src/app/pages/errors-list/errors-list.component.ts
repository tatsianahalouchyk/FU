import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorsModalComponent } from './errors-modal/errors-modal.component';

@Component({
  selector: 'app-errors-list',
  templateUrl: './errors-list.component.html',
  styleUrls: ['./errors-list.component.scss']
})
export class ErrorsListComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    // public dialogRef: MatDialogRef<UsersListComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  onErrorClick() {
    console.log('onClick');
    const dialogRef = this.dialog.open(ErrorsModalComponent,
      {
        width: '100%',
        height: '90vh',
        // data: this.data
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  // closeModal() {
  //   this.dialogRef.close(true);
  // }

}
