import {Component} from "@angular/core";
import {Routes, ROUTER_DIRECTIVES, Router} from "@angular/router";

// @Routes([
//     {
//         path: "/dashboard",
//         component: DashboardComponent,
//         index: true
//     },
//     {
//         path: "/tasks",
//         component: TaskComponent
//     },
//     {
//         path: "/contacts",
//         component: ContactsComponent
//     },
//     {
//         path: "/udemy",
//         component: UdemyComponent
//     }
// ])

@Component({
    selector: "app",
    templateUrl: "client/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { 

    constructor(router:Router){
        console.log(router);
    }
}
