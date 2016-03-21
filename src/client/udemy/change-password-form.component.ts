import {Component} from "angular2/core";
import {ControlGroup, Validators, FormBuilder} from "angular2/common";

import {PasswordValidators} from "./passwordValidators";

@Component({
    selector: "change-password-form",
    templateUrl: "client/udemy/change-password-form.component.html"
})
export class ChangePasswordFormComponent {
    form: ControlGroup;
    passwordChanged: boolean;

    constructor(private fb: FormBuilder) {
        this.form = this.createChangePasswordForm();
    }

    createChangePasswordForm(): ControlGroup{
        return this.fb.group({
            oldPassword: ["", Validators.required],
            newPassword: ["", Validators.compose([
                Validators.required,
                PasswordValidators.complexPassword
            ])],
            // Note that here is no need to apply complexPassword validator
            // to confirm password field. It"s sufficient to apply it only to
            // new password field. Next, passwordsShouldMatch validator
            // will compare confirm password with new password and this will
            // implicitly enforce that confirm password should match complexity
            // rules. 
            confirmPassword: ["", Validators.required]
        }, { validator: PasswordValidators.passwordsShouldMatch });
    }

    changePassword() {
        // Validating the oldPassword on submit. In a real-world application
        // here, we"ll use a service to call the server. The server would
        // tell us that the old password does not match. 
        let oldPassword = this.form.find("oldPassword");
        if (oldPassword.value !== "1234")
            oldPassword.setErrors({ validOldPassword: true });

        if (this.form.valid) {
            // alert("Password successfully changed.");
            this.passwordChanged = true;
            this.form = this.createChangePasswordForm();
        }
    }
}