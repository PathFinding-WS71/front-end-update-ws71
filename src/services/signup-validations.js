import Validations from "@/services/validations";

export default class SignupValidations {
    constructor(username, password, email = "") {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    checkValidations() {
        let errors = [];

        if (!Validations.checkEmail(this.email)) {
            errors['email'] = 'Invalid Email';
        }
        if (!Validations.minLength(this.password, 6)) {
            errors['password'] = 'Password should be of 6 characters';
        }

        if (!Validations.minLength(this.username, 1)) {
            errors['username'] = 'Password should be of at least 1 character';
        }

        return errors;
    }
}