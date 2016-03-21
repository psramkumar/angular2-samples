import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: "voter",
    template: `
        <h3>{{title}}</h3>		
        <div class="voter">			
            <i class="glyphicon glyphicon-menu-up vote-button" 
                [class.highlight]="vote>0" 
                (click)="voting(1,$event)">
            </i>
            <span class="vote-count">
                {{totalVote + vote}}
            </span>		
            <i class="glyphicon glyphicon-menu-down vote-button" 
                [class.highlight]="vote<0" 
                (click)="voting(-1,$event)">
            </i>
        </div>	
    `,
    styles: [`

        .voter{
            width:20px;
            text-align:center;
            color:#999;
        }
        .vote-count,.glyphicon-menu-up,.glyphicon-menu-down{
            font-size:18px;
        }
        .vote-button{
            cursor:pointer;
        }
        .glyphicon-menu-up.highlight{
            color:green;
            font-weight:bold;
        }
        .glyphicon-menu-down.highlight{
            color:red;
            font-weight:bold;
        }

    `]
})


export class VoterComponent {
    vote: number = 0;
    @Input("vote-title") title: string;
    @Input("vote-count") totalVote: number = 0;

    @Output("when-voted") voted = new EventEmitter();

    voting(vote, $event) {
        if (this.vote === vote)
            return;

        this.vote = vote;
        // this.totalVote = this.totalVote + this.vote;
        this.voted.emit({ "vote": this.vote });
    }

}