import {Component} from "@angular/core";
import {Routes, ROUTER_DIRECTIVES, Router} from "@angular/router";

// @Routes([
//     {
//         path: "/helloworld",
//         component: HelloWorldComponent
//     },
//     {
//         path: "/todo",
//         component: TodoComponent
//     },
//     {
//         path: "/tabs",
//         component: TabDemoComponent
//     },
// ])

@Component({
    template: `
         <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
})

export class ExamplesComponent { }