import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-section-bar',
  templateUrl: './section-bar.component.html',
  styleUrls: ['./section-bar.component.scss']
})

export class SectionBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public executeSelectedChange = event => {
    console.log(event);
  };
}

export class Sectionbar { };