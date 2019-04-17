import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})

export class TrackingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  const appRoutes: Routes = [
    {
      path: 'tracking/:id',
      component: TrackingComponent,
      data: { title: 'Detalle del envio' }
    },
  ]


}
