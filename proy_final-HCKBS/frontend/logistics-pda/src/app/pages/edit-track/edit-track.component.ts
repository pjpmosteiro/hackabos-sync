import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { CanActivate, Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-track',
  templateUrl: './edit-track.component.html',
  styleUrls: ['./edit-track.component.scss']
})
export class EditTrackComponent implements OnInit {
  edit_tracking = this.fb.group(
    {
      id: [, [Validators.required]],
      status: [, [Validators.required]],
      remit: [, [Validators.required]],
      dest: [, [Validators.required]],
      user: [, [Validators.required]]
    },
  );


  constructor(private fb: FormBuilder, public http: HttpClient, private router: Router) { }



  ngOnInit() {
  }


  data1: any;
  public send() {
    this.http.patch(`${environment.apiBaseUrl}/lg01s/`, this.edit_tracking.value)
      .subscribe(
        successCallback => alert("Envío actualizado correctamente "),
        errorCallback => alert('Se ha producido un error. Por favor, inténtelo de nuevo más tarde')
      ),
      this.http.get(`${environment.apiBaseUrl}/lg01s/${this.edit_tracking.value['id']}`)
        .subscribe(
          data => this.data1 = data,
          err => alert('Se ha producido un error. Por favor, inténtelo de nuevo más tarde')

        );
  };


  public get() {

    this.http.get(`${environment.apiBaseUrl}/lg01s/${this.edit_tracking.value['id']}`)
      .subscribe(
        data => this.data1 = data,
        err => alert('Se ha producido un error. Por favor, inténtelo de nuevo más tarde')

      );
  };
}
