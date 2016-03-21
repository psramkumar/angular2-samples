import {Component} from "angular2/core";
import {ControlGroup, Control, Validators, FormBuilder} from "angular2/common";
import {UsernameValidators} from "./username.validators";

@Component({
    selector: "signup-form",
    templateUrl: "client/udemy/signup-form.component.html"
})

export class SignupFormComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            username: ["", Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ]), UsernameValidators.shouldBeUnique],
            password: ["", Validators.required]
        });
    }
    // above snippet do the same behavior
    // form = new ControlGroup({
    //     username: new Control("", Validators.required),
    //     password: new Control("", Validators.required)
    // });

    signup() {
        // var result = authService.login(this.form.value);
        this.form.find("username").setErrors({
            invalidLogin: true
        });

        console.log(this.form.value);
    }
}