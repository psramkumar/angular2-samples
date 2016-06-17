import {Component} from "@angular/core";
import {Routes, ROUTER_DIRECTIVES, Router} from "@angular/router";

import {DashboardComponent} from "../dashboard/dashboard.component";
import {ContactsComponent} from "../contacts/contacts.component";
import {TaskComponent} from "../task/task.component";
import {UdemyComponent} from "../udemy/udemy.component";
import {ExamplesComponent} from "../examples/examples.component";

@Routes([
    {
        path: "/",
        component: DashboardComponent
    },
    {
        path: "/examples/...",
        component: ExamplesComponent
    },
    {
        path: "/tasks",
        component: TaskComponent
    },
    {
        path: "/contacts",
        component: ContactsComponent
    },
    {
        path: "/udemy",
        component: UdemyComponent
    }
])

@Component({
    selector: "app",
    templateUrl: "client/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }
