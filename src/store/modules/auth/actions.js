import {SIGNUP_ACTION} from "@/store/store-constants";
import axios, {Axios} from "axios";

export default {
    async [SIGNUP_ACTION](_, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
        }
        let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlfV5mZjvRzxVRqM1NMeJn7L9UkU9yARw`,
            postData,
        );
        console.log(response);
    },
};