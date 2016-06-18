import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: "dashboard",
    templateUrl: "client/dashboard/dashboard.html",
    styleUrls: ["client/dashboard/dashboard.css"]
})
export class DashboardComponent {
    public name = "narukku";
    public message = "";

    constructor(private router:Router,private r:ActivatedRoute){
        console.log("Dashboard",this.router,this.r);
    }

    sayHello() {
        this.message = "Hello " + this.name + "!";
    }

    navigateContact(e){
        console.log("navigate",e);

        this.router.navigate(['/contacts'],{relativeTo:this.r}).then(_=>{
            console.log("contacts navigation doone");
        });
    }
}
