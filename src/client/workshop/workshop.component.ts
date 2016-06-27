import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
    template: `
         <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
})

export class WorkshopComponent { }