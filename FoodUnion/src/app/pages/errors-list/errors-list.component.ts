import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorsModalComponent } from './errors-modal/errors-modal.component';

@Component({
  selector: 'app-errors-list',
  templateUrl: './errors-list.component.html',
  styleUrls: ['./errors-list.component.scss']
})
export class ErrorsListComponent implements OnInit {
  // TODO update any type:
  errorsList: any[] = [];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.errorsList = [
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
      { name: 'An error' },
    ];
  }

  // TODO update any type:
  onErrorChoose(error: any) {
    const dialogRef = this.dialog.open(ErrorsModalComponent,
      {
        width: '60%',
        height: '60vh',
        // data: error
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
