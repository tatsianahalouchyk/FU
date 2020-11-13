import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onClick() {
    this.router.navigate(['./users-list']);
  }

}
