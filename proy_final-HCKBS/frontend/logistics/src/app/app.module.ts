import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngxs/store';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './auth/store/auth.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './auth/services/jwt.interceptor';


import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { HomeComponent } from "./home/home.component";
import { RoutingModule } from "./routing/routing.module";
import { HeaderComponent } from "./navigation/header/header.component";
import { SidenavListComponent } from "./navigation/sidenav-list/sidenav-list.component";
import { LoginComponent } from './auth/containers/login/login.component';
import { RegisterComponent } from './auth/containers/register/register.component';
import { Section1Component } from './home/components/section1/section1.component';
import { Section2Component } from './home/components/section2/section2.component';
import { Section3Component } from './home/components/section3/section3.component';
import { SectionBarComponent } from './home/components/section-bar/section-bar.component';
import { UserComponent } from './pages/user/user.component';
import { CustomMaterialModule } from "./layout/material/material.module";
import { ContentComponent } from './home/components/content/content.component';


import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { ErrorModule } from './error/error.module';
import { GlobalState } from './shared/state/global.state';
import { SharedModule } from './shared/shared.module';
import { TrackingComponent } from './pages/tracking/tracking.component';
import { PrvNavComponent } from './navigation/prv-nav/prv-nav.component';
import { NewTrackComponent } from './pages/new-track/new-track.component';
import { LogoutComponent } from './auth/containers/logout/logout.component';


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
    TrackingComponent,
    PrvNavComponent,
    NewTrackComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forFeature([AuthState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({ logger: console, collapsed: false }),
    NgxsRouterPluginModule.forRoot(),
    NgxsModule.forRoot([GlobalState], {
      developmentMode: !environment.production
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
