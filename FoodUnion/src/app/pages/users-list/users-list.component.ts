import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewUserModalComponent } from './new-user-modal/new-user-modal.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  // TODO update any type:
  usersList: any[] = [];

  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.usersList = [
      { name: 'A user 1' },
      { name: 'A user 2' },
      { name: 'A user 3' },
      { name: 'A user 4' },
      { name: 'A user 5' },
      { name: 'A user 6' },
      { name: 'A user 7' },
      { name: 'A user 8' },
      { name: 'A user 9' },
      { name: 'A user 10' },
      { name: 'A user 11' },
      { name: 'A user 12' },
      { name: 'A user 13' },
      { name: 'A user 14' },
      { name: 'A user 15' },
      { name: 'A user 16' },
      { name: 'A user 17' },
      { name: 'A user 18' },
      { name: 'A user 19' },
      { name: 'A user 20' },
      { name: 'A user 21' },
      { name: 'A user 22' },
      { name: 'A user 23' },
      { name: 'A user 24' },
      { name: 'A user 25' },
      { name: 'A user 26' },
      { name: 'A user 27' },
      { name: 'A user 28' },
      { name: 'A user 29' },
      { name: 'A user 30' },
      { name: 'A user 31' },
    ];
  }

  // TODO update user type:
  onUserChoose(users: any[]) {
    console.log('users:', users);
  }

  onNewUserAddition() {
    console.log('onNewUserAddition');
    const dialogRef = this.dialog.open( NewUserModalComponent,
      {
        width: '100%',
        height: '50vh',
      }
    );

    // dialogRef.afterClosed().subscribe(result => {
    //   // console.log(`Dialog result: ${result}`);
    // });
  }

}
