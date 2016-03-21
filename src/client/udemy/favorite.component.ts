import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: "favorite",
    template: `
        <h3>{{title}}<h3>
        <i *ngFor="#favorite of favorites,#i=index"
            class="glyphicon" 
            [class.glyphicon-star]="favorite.marked" 
            [class.glyphicon-star-empty]="!favorite.marked" 
            (click)="toggleFavorite(i,$event)">
        </i>							
    `,
    styles: [`
        i.glyphicon{
            font-size:20px;
            cursor:pointer;			
        }
        .glyphicon-star{
            color:green;				
        }		
    `]
})

export class FavoriteComponent {
    @Input("r-title") title: string;
    @Input("r-data") favorites: any[];

    @Output("r-change") favChange = new EventEmitter();

    toggleFavorite(index, $event) {
        for (let f = 0; f < this.favorites.length; f++) {
            if (f <= index) {
                this.favorites[f].marked = true;
            } else {
                this.favorites[f].marked = false;
            }
        }
        this.favChange.emit(this.favorites);
    }

}