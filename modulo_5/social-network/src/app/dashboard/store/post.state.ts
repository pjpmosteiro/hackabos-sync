import { State, Store, Action } from '@ngxs/store';
import { PostCollection } from '../dashboard.models';
import { PostService } from '../services/post.service';
import { GetPostsSuccess, GetPostsFailed, GetPosts } from './post.action';
import { tap, catchError } from 'rxjs/operators';
import { dispatch } from 'rxjs/internal/observable/range';


@State<PostCollection>({
    name: 'posts',
    defaults: {}
})
export class PostState {

    constructor(private store: Store, private postService: PostService) { }

    @Action(GetPosts)
    getPosts({ dispatch }: StateContext<PostCollection>) {
        return this.postService.getWall().pipe(
            tap(post => dispatch(new GetPostsSuccess(posts))),
            catchError(error => dispatch(new GetPostsFailed(error.error)))
        );
    }

    @Action(GetPostsSuccess)
    GetPostsSuccess(
        { setState }: StateContext<PostCollection>,
        { posts }: GetPostsSuccess
    ) {

        setState(posts);
    }

    @Action(GetPostsFailed)
    GetPostsFailed(ctx: StateContext<PostCollection>, action: GetPostsFailed) {
        console.log(errors)
    }
}
