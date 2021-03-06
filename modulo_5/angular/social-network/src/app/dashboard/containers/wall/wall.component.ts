import { Component, OnInit, ElementRef } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetPosts, AddPost } from '../../store/post.action';
import { PostState } from '../../store/post.state';
import { Post } from '../../dashboard.models';
import { Observable, interval } from 'rxjs';
import { AuthState } from 'src/app/auth/store/auth.state';
import { Auth } from '../../../auth/auth.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sn-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
  @Select(PostState) posts$: Observable<Post[]>;
  @Select(AuthState) currentUser$: Observable<Auth>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private element: ElementRef
  ) {}

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.store.dispatch(new GetPosts(routeParams.userId));

      this.element.nativeElement.parentElement.scrollTop = 0;
    });
  }

  publishPost(content) {
    this.store.dispatch(new AddPost({ content }));
  }
}
