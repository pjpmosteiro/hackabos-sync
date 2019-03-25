import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetPosts } from '../../store/post.action';
import { PostState } from '../../store/post.state';
import { PostResponse } from '../../dashboard.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'sn-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
  @Select(PostState.getPost) posts$: Observable<PostResponse[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new GetPosts());
  }
}
