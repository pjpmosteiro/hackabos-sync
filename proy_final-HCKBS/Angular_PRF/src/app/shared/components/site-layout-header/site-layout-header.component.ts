import { Component } from '@angular/core';
import { faYelp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'sn-site-layout-header',
  templateUrl: './site-layout-header.component.html',
  styleUrls: ['./site-layout-header.component.scss']
})
export class SiteLayoutHeaderComponent {
  logo = faYelp;
  title = 'Pablo Logistics';
}
