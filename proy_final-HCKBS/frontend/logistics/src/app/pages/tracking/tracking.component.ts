import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ofActionSuccessful } from '@ngxs/store';
import { getTrackingData } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
  title = 'app';
  results = '';
  constructor(private authService: AuthService) { }
  ngOnInit() { }

  onSuccess(response: any) {
    console.log("GET OK")
  }

  onError() {
    console.log("GET FAIL")
  }
  //TODO: Get data desde api 
  list(): Observable<getTrackingData> {

  }

}

