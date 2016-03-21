import {Component, Input, Output, EventEmitter} from "angular2/core";
import {LikeComponent} from "./like.component";

@Component({
    selector: "card",
    template: `
        <div class="media card" *ngFor="#person of persons,#i=index">
            <div class="media-left">
                <a [href]="person.image">
                    <img class="media-object" [src]="person.image" [alt]="person.first_name">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{person.first_name + " " + person.last_name}}</h4>
                <span>{{person.email}}</span><br/>
                <p>{{person.about}}</p>
                <like [is-liked]="person.liked" (like-change)="onLikeChange($event)"></like>
            </div>            
        </div>
    `,
    styles: [`
        .card{
            padding:10px;
            margin:10px;
        }
    `],
    directives: [LikeComponent]
})

export class CardComponent {

    @Input("c-data") persons: any[];

    onLikeChange($event) {
        console.log($event);
    }
}