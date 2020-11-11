import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onExitClick() {
    this.router.navigate(['./login']);
    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Your work has been saved',
    //   // customClass: 'swal-wide',
    //   showConfirmButton: false,
    //   timer: 1500
    // });
  }

}
