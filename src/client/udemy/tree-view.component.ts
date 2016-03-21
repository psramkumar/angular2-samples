import {Component, Input} from "angular2/core";

@Component({
    selector: "tree-view"
    , template: `
        <h3 *ngIf="title.length > 0"> {{title}} </h3>
        <ul>
            <li *ngFor="#child of data,#ch=index">
                {{child.name}}
                <tree-view [tree-data]="child.childs"></tree-view> 
            </li>
        </ul>       
    `
    , directives: [TreeViewComponent]
})

export class TreeViewComponent {
    @Input("tree-title") title: string = "";
    @Input("tree-data") data: any[] = [];
}