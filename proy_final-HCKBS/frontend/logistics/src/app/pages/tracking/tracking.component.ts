import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Store, Actions, ofAction } from '@ngxs/store';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})

export class TrackingComponent {
  constructor(public http: HttpClient,
    private fb: FormBuilder,
    private store: Store,
    private actions$: Actions) { }
  //Envío de datos al backend
  public send() {
    this.http.get(`${environment.apiBaseUrl}/lg01s`)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

  registerForm = this.fb.group(
    {
      track_number: ['']

    })
}
