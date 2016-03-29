import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {HelloWorldComponent} from "./helloworld/helloworld.component";
import {TodoComponent} from "./todo/todo.component";
import {TabDemoComponent} from "./tabs/demo.component";

@RouteConfig([
    {
        path: "/helloworld",
        name: "HelloWorld",
        component: HelloWorldComponent,
        useAsDefault: true
    },
    {
        path: "/todo",
        name: "Todo",
        component: TodoComponent
    },
    {
        path: "/tabs",
        name: "Tabs",
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