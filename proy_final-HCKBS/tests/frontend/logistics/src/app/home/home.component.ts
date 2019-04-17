import { Component, OnInit, NgModule } from "@angular/core";
import { Sectionbar } from "./components/section-bar/section-bar.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

@NgModule({
  imports: [Sectionbar],
  declarations: [Sectionbar]
})

export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  public executeSelectedChange = event => {
    console.log(event);
  };
}
