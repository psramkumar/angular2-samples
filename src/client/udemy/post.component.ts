import {Component, OnInit} from "angular2/core";
import {PostService} from "./post.service";
import {Post} from "./post";

@Component({
    selector: "post-http",
    template: `
        <button (click)="getPost()">Get Post</button>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner"></i>
        </div>
        <hr/> {{posts[0] | json}}
     `,
    providers: [PostService]
})

export class PostComponent implements OnInit {
    isLoading = false;
    posts: Post[] = [];

    constructor(private _postService: PostService) {
        this._postService.createPost({
            userId: 1,
            title: "a",
            body: "b"
        });
    }

    ngOnInit() {
        console.log("ngOnInit method");
        // this.getPost();
    }

    getPost() {
        this.isLoading = true;
        this._postService.getPosts()
            .subscribe(data => {
                console.log(data);
                this.posts = data;
                this.isLoading = false;
            });
    }
}