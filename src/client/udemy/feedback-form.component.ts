import { Component} from "@angular/core";

@Component({
    selector: "feedback-form",
    templateUrl: "client/udemy/feedback-form.component.html"
})

export class FeedbackFormComponent {

    submitFeedback(form) {
        console.log(form.value);
    }
}