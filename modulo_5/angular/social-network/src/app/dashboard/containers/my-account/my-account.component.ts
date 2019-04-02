import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from '../../../auth/auth.models';
import { AuthState } from 'src/app/auth/store/auth.state';

@Component({
  selector: 'sn-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  @Select(AuthState) user$: Observable<Auth>;
  profileImageUrl: string;

  constructor() {}

  ngOnInit() {
    this.user$.subscribe(user => {
      if (user && user.avatarUrl) {
        this.profileImageUrl = user.avatarUrl;
      } else {
        this.profileImageUrl = `https://api.adorable.io/avatars/128/${
          user.uuid
        }`;
      }
    });
  }
}
