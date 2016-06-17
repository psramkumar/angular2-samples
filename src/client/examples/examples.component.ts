import {Component} from "@angular/core";
import {Routes, ROUTER_DIRECTIVES, Router} from "@angular/router";

import {HelloWorldComponent} from "./helloworld/helloworld.component";
import {TodoComponent} from "./todo/todo.component";
import {TabDemoComponent} from "./tabs/demo.component";

@Routes([
    {
        path: "/helloworld",
        component: HelloWorldComponent
    },
    {
        path: "/todo",
        component: TodoComponent
    },
    {
        path: "/tabs",
        component: TabDemoComponent
    },
])

@Component({
    template: `
         <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
})

export class ExamplesComponent { }