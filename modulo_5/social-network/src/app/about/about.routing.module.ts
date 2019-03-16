import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about.component';


const routes = [{
  path: 'about',
  component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})

export class AboutRoutingModule { }
