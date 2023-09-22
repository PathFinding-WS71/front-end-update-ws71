import {
    LOADING_SPINNER_SHOW_MUTATION,
    LOGIN_ACTION,
    SET_USER_TOKEN_DATA_MUTATION,
    SIGNUP_ACTION
} from "@/store/store-constants";
import axios from "axios";
import SignupValidations from "@/services/signup-validations";

export default {
    async [LOGIN_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
        };
        let response = '';

        try {
            response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlfV5mZjvRzxVRqM1NMeJn7L9UkU9yARw`,
                postData,
            );
        } catch (err) {
            context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {root: true});
            throw SignupValidations.getErrorMessageFromCode(
                err.response.data.error.errors[0].message);
        }

        if (response.status === 200) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: response.data.email,
                token: response.data.idToken,
                expiresIn: response.data.expiresIn,
                refreshToken: response.data.refreshToken,
                userId: response.data.localId,
            })
        }
    },

    async [SIGNUP_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
        };
        let response = '';

        context.commit(LOADING_SPINNER_SHOW_MUTATION, true, {root: true});

        try {
            response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlfV5mZjvRzxVRqM1NMeJn7L9UkU9yARw`,
                postData,
            );
        } catch (err) {
            context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {root: true});
            throw SignupValidations.getErrorMessageFromCode(
                err.response.data.error.errors[0].message);
        }

        context.commit(LOADING_SPINNER_SHOW_MUTATION, false, {root: true});
        if (response.status === 200) {
            context.commit(SET_USER_TOKEN_DATA_MUTATION, {
                email: response.data.email,
                token: response.data.idToken,
                expiresIn: response.data.expiresIn,
                refreshToken: response.data.refreshToken,
                userId: response.data.localId,
            })
        }
    },
};