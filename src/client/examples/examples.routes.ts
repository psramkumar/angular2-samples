import { RouterConfig } from '@angular/router';

import {ExamplesComponent} from "./examples.component";
import {HelloWorldComponent} from "./helloworld/helloworld.component";
import {TodoComponent} from "./todo/todo.component";
import {TabDemoComponent} from "./tabs/demo.component";

export const ExamplesRoutes: RouterConfig = [
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
