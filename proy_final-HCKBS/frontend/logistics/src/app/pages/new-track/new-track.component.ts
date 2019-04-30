import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new-track',
  templateUrl: './new-track.component.html',
  styleUrls: ['./new-track.component.scss']
})
export class NewTrackComponent implements OnInit {
  new_tracking = this.fb.group(
    {
      remit: ['', [Validators.required]],
      dest: ['', [Validators.required]],
      user: ['', [Validators.required]]
    },
  );
  constructor(private fb: FormBuilder, public http: HttpClient) { }

  ngOnInit() {
  }
  data_exp: any;
  public create() {

    this.http.post(`${environment.apiBaseUrl}/lg01s/`, this.new_tracking.value)
      .subscribe(
        successCallback => alert("Envio generado correctamente. Consulte el número de seguimiento en la sección 'Mis Envios' "),
        errorCallback => alert('Se ha producido un error. Por favor, inténtelo de nuevo más tarde')
      )
  }
  // Resultado de la generacion del envio -- ANULADO, no es estable

  /*
   this.http.get(`${environment.apiBaseUrl}/lg01s/?filter=%7B%22where%22%3A%7B%22user%22%3A%22${this.new_tracking.value.user}%22%7D%7D`)
     .subscribe(
       data => this.data_exp = data,
       err => console.log(err)
     );
   alert(this.new_tracking.value.user);
   console.log(this.data_exp);
*/
};
