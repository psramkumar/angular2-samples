import {provideRouter, RouterConfig} from "@angular/router";

import {DashboardComponent} from "../dashboard/dashboard.component";
import {ContactsComponent} from "../contacts/contacts.component";
import {TaskComponent} from "../task/task.component";
import {UdemyComponent} from "../udemy/udemy.component";
import {ExamplesComponent} from "../examples/examples.component";

import {HelloWorldComponent} from "../examples/helloworld/helloworld.component";
import {TodoComponent} from "../examples/todo/todo.component";
import {TabDemoComponent} from "../examples/tabs/demo.component";

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
    {
        path:"examples",
        component:ExamplesComponent,
        children:[
            {
                path: "helloworld",
                component: HelloWorldComponent
            },
            {
                path: "todo",
                component: TodoComponent
            },
            {
                path: "tabs",
                component: TabDemoComponent
            }           
        ]
    }
];

export const APP_ROUTES_PROVIDER = [
    provideRouter(routes)
];