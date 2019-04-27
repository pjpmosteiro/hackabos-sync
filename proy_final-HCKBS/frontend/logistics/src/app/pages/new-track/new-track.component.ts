import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-track',
  templateUrl: './new-track.component.html',
  styleUrls: ['./new-track.component.scss']
})
export class NewTrackComponent implements OnInit {
  new_tracking = this.fb.group(
    {
      track_number: ['']
    },
    { updateOn: 'blur' }
  );
  constructor(private fb: FormBuilder, public http: HttpClient) { }

  ngOnInit() {
  }
  datos: any;
  datos_new: any;
  public create() {
    this.http.post(`${environment.apiBaseUrl}/lg01s/${this.tracking.value['track_number']}`, any)
      .subscribe(
        data => this.datos = data,
        err => console.log(err)
      );
    alert("Create OK");

  }
}
