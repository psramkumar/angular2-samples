import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "favorite",
    template: `
        <i class="glyphicon" 
            [class.glyphicon-star]="favorite.marked" 
            [class.glyphicon-star-empty]="!favorite.marked" 
            (click)="toggleFavorite($event)">
        </i>							
    `,
    styles: [`
        i.glyphicon{
            font-size:20px;
            cursor:pointer;			
        }
        .glyphicon-star{
            color:orange;				
        }		
    `]
})

export class FavoriteComponent {
    @Input("r-data") favorite: {marked:Boolean} = {marked:false};

    @Output("r-change") favChange = new EventEmitter();

    toggleFavorite($event) {
        console.log($event,this.favorite);
        this.favorite.marked = !this.favorite.marked;
        this.favChange.emit(this.favorite);
    }

}