import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})

export class TrackingComponent {
  constructor(public http: HttpClient) { }
  public ping() {
    this.http.get(`${environment.apiBaseUrl}/lg01s`)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
