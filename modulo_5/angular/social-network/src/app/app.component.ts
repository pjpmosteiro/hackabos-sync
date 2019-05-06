import { Component } from '@angular/core';
import { GlobalState } from './shared/state/global.state';
import { Select } from '@ngxs/store';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hola soy Yago';
  @Select(GlobalState.isFetching) isFetching$;

  constructor() {}

  onClick(event) {
    console.log(event);
  }
}
