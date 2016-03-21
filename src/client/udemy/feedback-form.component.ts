import { Component} from "angular2/core";

@Component({
    selector: "feedback-form",
    templateUrl: "client/udemy/feedback-form.component.html"
})

export class FeedbackFormComponent {

    submitFeedback(form) {
        console.log(form.value);
    }
}