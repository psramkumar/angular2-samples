import {Component, Input, Output} from "@angular/core";
import {FavoriteComponent} from "./favorite.component";
import {IBookmark, Bookmark} from "./bookmark";

@Component({
    selector:"bookmark-item",
    host:{
        //class:"row"
    },
    templateUrl:"client/workshop/firstapp/bookmark.html",
    directives:[FavoriteComponent],
    styles:[
        `
        :host{
            
        }

        .bookmark-item{
            background:#f5f5f5;
            margin: 5px 5px;
            float:left;
            padding:5px;
        }
        .favorite{
            margin:5px;
        }

        `
    ]
})

export class BookmarkComponent{
    @Input('r-data') bookmark:IBookmark = new Bookmark('','');
    
    constructor(){
        console.log("bookmark",this.bookmark);
    }

    toggleFavorite(favorite){
        this.bookmark.isFavorite = favorite.marked;
    }
}