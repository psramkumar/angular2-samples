import {DashboardComponent} from "../dashboard/dashboard.component";
import {ContactsComponent} from "../contacts/contacts.component";
import {TaskComponent} from "../task/task.component";
import {UdemyComponent} from "../udemy/udemy.component";
import {ExamplesComponent} from "../examples/examples.component";

export const APP_ROUTES = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardComponent,
        index: true,
        useAsDefault: true
    }//,
    // {
    //     path: "/examples/...",
    //     name: "Examples",
    //     component: ExamplesComponent
    // },
    // {
    //     path: "/tasks",
    //     name: "Tasks",
    //     component: TaskComponent
    // },
    // {
    //     path: "/contacts",
    //     name: "Contacts",
    //     component: ContactsComponent
    // },
    // {
    //     path: "/udemy",
    //     name: "Udemy",
    //     component: UdemyComponent,
    //     useAsDefault: true
    // }
];