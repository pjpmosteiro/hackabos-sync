import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../auth/containers/login/login.component';
import { UserComponent } from '../pages/user/user.component';
import { TrackingComponent } from '../pages/tracking/tracking.component';
import { NewTrackComponent } from '../pages/new-track/new-track.component';
import { LogoutComponent } from '../auth/containers/logout/logout.component';
import { AuthGuard } from '../auth/services/auth.guard';
import { EditTrackComponent } from '../pages/edit-track/edit-track.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'track', component: TrackingComponent, canActivate: [AuthGuard] },
  { path: 'new', component: NewTrackComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: 'alter', component: EditTrackComponent, canActivate: [AuthGuard] },



];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
