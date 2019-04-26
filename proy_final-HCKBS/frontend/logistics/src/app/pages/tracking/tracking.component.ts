import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

  data: any;
  public send() {

    this.http.get(`${environment.apiBaseUrl}/lg01s/${this.tracking.value['track_number']}`)
      .subscribe(
        data => this.data = data,
        err => console.log(err)
      );
<<<<<<< Updated upstream
    alert(`Numero de seguimiento: ${this.data.id}`);
    alert(`Remitente: ${this.data.remit}`);
    alert(`Destinatario: ${this.data.dest}`);


    console.log(this.datos);


=======
>>>>>>> Stashed changes
  };
}

/*${this.datos.remit}*/