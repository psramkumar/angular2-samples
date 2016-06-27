import {Injectable} from "@angular/core";
import {Inject} from "@angular/core";
import {IBookmark} from "./bookmark";
import {Http, HTTP_PROVIDERS, Headers} from "@angular/http";

@Injectable()
export class BookmarkService {
    tasks: string[] = [];

    http: Http;
    constructor( @Inject(Http) http: Http) {
        this.http = http;
    }

    getBookmarks(): any {
        return this.http.get("/bookmarks/list");

    }

    addBookmark(bookmark: any): any {
        console.log("post bookmark :::", bookmark);

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post("/bookmarks/save", JSON.stringify(bookmark), { headers: headers });
        // .map(res => res.json())
        // .subscribe((res:Person) => this.postResponse = res);
        // }

    }
}