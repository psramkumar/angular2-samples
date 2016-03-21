import {Component} from "angular2/core";

@Component({
    selector: "subscription-form",
    templateUrl: "client/udemy/subscription-form.component.html"
})
export class SubscriptionFormComponent {
    frequencies = [
        { id: 1, label: "Daily" },
        { id: 2, label: "Weekly" },
        { id: 3, label: "Monthly" }
    ];

    onSubscribe(form) {
        console.log(form.value);
    }
}