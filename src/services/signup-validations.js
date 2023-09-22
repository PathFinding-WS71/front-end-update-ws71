import Validations from "@/services/validations";

export default class SignupValidations {
    constructor(email, password) {
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
        return errors;
    }

    static getErrorMessageFromCode(errorCode) {
        switch (errorCode) {
            case 'EMAIL_EXISTS' :
                return 'Email already exists';
            case 'EMAIL_NOT_FOUND' :
                return 'Email not found';
            case 'INVALID_PASSWORD' :
                return 'Incorrect password';
            default:
                return 'Unexpected error occurred. Please try again';
        }
    }
}