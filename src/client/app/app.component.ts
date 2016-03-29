import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

import {DashboardComponent} from "../dashboard/dashboard.component";
import {ContactsComponent} from "../contacts/contacts.component";
import {TaskComponent} from "../task/task.component";
import {UdemyComponent} from "../udemy/udemy.component";

import {ExamplesComponent} from "../examples/examples.component";


@Component({
    selector: "app",
    templateUrl: "client/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    // {
    //     path: "/",
    //     redirectTo: ["Dashboard"]
    // },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardComponent,
        useAsDefault: false
    },
    {
        path: "/examples/...",
        name: "Examples",
        component: ExamplesComponent
    },
    {
        path: "/tasks",
        name: "Tasks",
        component: TaskComponent
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: ContactsComponent
    },
    {
        path: "/udemy",
        name: "Udemy",
        component: UdemyComponent,
        useAsDefault: true
    }
])

export class AppComponent { }
