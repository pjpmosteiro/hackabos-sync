import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardAsideComponent } from './components/dashboard-aside/dashboard-aside.component';
import { DashboardFooterComponent } from './components/dashboard-footer/dashboard-footer.component';
import { WallComponent } from './containers/wall/wall.component';
import { FriendsComponent } from './containers/friends/friends.component';
import { MyAccountComponent } from './containers/my-account/my-account.component';
import { MyaccountComponent } from './myaccount/myaccount.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavComponent,
    DashboardHeaderComponent,
    DashboardAsideComponent,
    DashboardFooterComponent,
    WallComponent,
    FriendsComponent,
    MyAccountComponent,
    MyaccountComponent
  ],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
