import axios from "axios";

// Base Api url
export default axios.create({
    headers: { "Content-type": "application/json" },
    baseURL: "http://127.0.0.1:5277/api"
});