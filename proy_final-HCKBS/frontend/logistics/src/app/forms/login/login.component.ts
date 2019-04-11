import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material'
import { Login } from '../../auth/store/auth.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  username: string;
  password: string;
  //TODO: Ajustar funcion login para enrutar hacia el servicio
  login() {
    this.store.dispatch(new Login(this.loginForm.value));
  }
  /*
  //DATOS DE PRUEBA PARA TESTEAR LOGIN
  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["user"]);
    } else {
      alert("Invalid credentials");
    }
  }
  */
}