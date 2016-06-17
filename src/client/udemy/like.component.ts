import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "like",
    template: `
        <h3>{{title}}<h3>
        <i class="glyphicon glyphicon-heart" 
            [class.highlight]="isLiked" 
            (click)="toggleLike($event)">
        </i>
        <span *ngIf="isLiked">
            Oh ya! you liked me :) 
        <span>
    `,
    styles: [`

        .glyphicon-heart{
            font-size:20px;
            color:#ccc;
            cursor:pointer;			
        }
        .glyphicon-heart.highlight{
            color:pink;				
        }
		
    `]
})
export class LikeComponent {
    @Input("is-liked") isLiked: boolean;
    @Input("like-title") title: string;

    @Output("like-change") likeChange = new EventEmitter();

    toggleLike($event) {
        this.isLiked = !this.isLiked;
        this.likeChange.emit({ "liked": this.isLiked })
    }
}