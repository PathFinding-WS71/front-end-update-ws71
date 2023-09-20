import axios from "axios";

// Base Api url
export default axios.create({
    baseURL: "https://updateapp.azurewebsites.net/api",
    headers: { "Content-type": "application/json" },
});