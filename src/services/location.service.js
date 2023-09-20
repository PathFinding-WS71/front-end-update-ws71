import http from "./http-common";

export class LocationService {
    getLocations = () => {
        return http.get("/Location");
    }

    getLocationById = (id) => {
        return http.get(`/Location/${id}`);
    }

    postLocation = (body) => {
        return http.post("/Location", body);
    }

    putLocation = (id, body) => {
        return http.put(`/Location/${id}`, body);
    }

    deleteLocation = (id) => {
        return http.delete(`/Location/${id}`);
    }
}