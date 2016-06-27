import { RouterConfig } from '@angular/router';

import {WorkshopComponent} from "./workshop.component";
import {FirstAppComponent} from "./firstapp/firstapp.component";

export const WorkshopRoutes: RouterConfig = [
    {
        path:"workshop",
        component:WorkshopComponent,
        children:[
            {
                path: "firstapp",
                component: FirstAppComponent
            },         
        ]
    }
];
