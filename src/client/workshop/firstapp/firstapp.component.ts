import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

import {IBookmark,Bookmark} from "./bookmark";
import {BookmarkComponent} from "./bookmark.component";
import {BookmarkService} from "./bookmark.service";

@Component({
    selector: "firstapp",
    templateUrl: "client/workshop/firstapp/firstapp.html",
    directives:[BookmarkComponent]
})

export class FirstAppComponent {
    private newBookmark:IBookmark;
    private _bookmarks:IBookmark[];

    constructor(private router:Router, private r:ActivatedRoute, private _bookmarkService: BookmarkService){
        console.log("First App",this.router,this.r);
        this.newBookmark = new Bookmark('','');
    }

    get bookmarks() {
        return this._bookmarks || this.getBookmarks();
    }

    private getBookmarks() {
        this._bookmarks = [];

        this._bookmarkService.getBookmarks()
            .subscribe(bookmarks => this._bookmarks = bookmarks.json());
        return this._bookmarks;
    }

    deleteBookmark(e: Event, bookmark: Bookmark) {
        let index = this._bookmarks.indexOf(bookmark);
        this._bookmarks.splice(index, 1);
    }

    addBookmark(title:HTMLInputElement,address:HTMLInputElement){  
        this.newBookmark.title = title.value;
        this.newBookmark.address = address.value;

        this._bookmarkService.addBookmark(this.newBookmark)
            // .map(res => res.json())
            .subscribe(res => this._bookmarks = res.data);;

        this.newBookmark = new Bookmark('','');
        title.value = "";
        address.value = "";
    }
    
}
