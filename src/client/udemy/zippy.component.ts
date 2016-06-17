import {Component, Input} from "@angular/core";

@Component({
    selector: "zippy",
    templateUrl: "client/udemy/zippy.component.html"
})

export class ZippyComponent {
    isExpanded: boolean;
    @Input("z-title") title: string;

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}