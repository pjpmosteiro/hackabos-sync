import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})

export class TrackingComponent {

  tracking = this.fb.group(
    {
      track_number: ['']
    },
    { updateOn: 'blur' }
  );


  constructor(private fb: FormBuilder, public http: HttpClient) { }

  datos: any;
  public send() {

    this.http.get(`${environment.apiBaseUrl}/lg01s/${this.tracking.value['track_number']}`)
      .subscribe(
        data => this.datos = data,
        err => alert('Se ha producido un error. Por favor, inténtelo de nuevo más tarde')

      );
  };
}

/*${this.datos.remit}*/