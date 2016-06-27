import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

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
