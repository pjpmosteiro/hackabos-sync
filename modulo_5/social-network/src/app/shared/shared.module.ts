import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { SiteLayoutHeaderComponent } from './components/site-layout-header/site-layout-header.component';
import { SiteLayoutFooterComponent } from './components/site-layout-footer/site-layout-footer.component';


@NgModule({
  declarations: [SiteLayoutComponent, SiteLayoutHeaderComponent, SiteLayoutFooterComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [SiteLayoutComponent, SiteLayoutHeaderComponent, SiteLayoutFooterComponent],

})
export class SharedModule { }
