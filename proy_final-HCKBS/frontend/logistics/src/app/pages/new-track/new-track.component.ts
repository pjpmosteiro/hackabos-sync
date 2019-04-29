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
      remit: [''],
      dest: [''],
      user: ['']
    },
  );
  constructor(private fb: FormBuilder, public http: HttpClient) { }

  ngOnInit() {
  }

  public create() {
    console.log(this.new_tracking.value);

    this.http.post(`${environment.apiBaseUrl}/lg01s/`, this.new_tracking.value)
      .subscribe(
        successCallback => alert("ok"),
      );
    /*
  alert("Create OK");
*/
  }
}
