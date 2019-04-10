import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }
  fname: string;
  lname: string;
  address: string;
  email: string;
  user: string;
  password: string;
  ngOnInit() {
  }
  register() {
    alert("REGISTRO OK");
    alert(this.fname);
  }
}
