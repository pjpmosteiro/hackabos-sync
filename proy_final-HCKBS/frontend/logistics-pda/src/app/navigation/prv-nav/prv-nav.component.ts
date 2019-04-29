import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prv-nav',
  templateUrl: './prv-nav.component.html',
  styleUrls: ['./prv-nav.component.scss']
})
export class PrvNavComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
