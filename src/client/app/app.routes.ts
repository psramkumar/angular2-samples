import {provideRouter, RouterConfig} from "@angular/router";

import {DashboardComponent} from "../dashboard/dashboard.component";
import {ContactsComponent} from "../contacts/contacts.component";
import {TaskComponent} from "../task/task.component";
import {UdemyComponent} from "../udemy/udemy.component";

import {ExamplesRoutes} from "../examples/examples.routes";
import {WorkshopRoutes} from "../workshop/workshop.routes";

const routes : RouterConfig = [
    {
        path: "",
        component: DashboardComponent
    },
    {
        path: "tasks",
        component: TaskComponent
    },
    {
        path: "contacts",
        component: ContactsComponent
    },
    {
        path: "udemy",
        component: UdemyComponent
    },
    ...ExamplesRoutes,
    ...WorkshopRoutes
        
];

export const APP_ROUTES_PROVIDER = provideRouter(routes);