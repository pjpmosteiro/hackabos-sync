import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';


import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./home/home.component";
import { RoutingModule } from "./routing/routing.module";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Section1Component } from './home/components/section1/section1.component';
import { Section2Component } from './home/components/section2/section2.component';
import { Section3Component } from './home/components/section3/section3.component';
import { SectionBarComponent } from './home/components/section-bar/section-bar.component';
import { UserComponent } from './user/user.component';
import { CustomMaterialModule } from "./layout/material/material.module";
import { ContentComponent } from './home/components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    LoginComponent,
    RegisterComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    SectionBarComponent,
    UserComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
