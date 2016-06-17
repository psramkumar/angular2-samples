import { RouterConfig } from '@angular/router';

import {HelloWorldComponent} from "./helloworld/helloworld.component";
import {TodoComponent} from "./todo/todo.component";
import {TabDemoComponent} from "./tabs/demo.component";

export const ExamplesRoutes: RouterConfig = [
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
];
