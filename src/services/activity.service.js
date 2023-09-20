import http from "./http-common";

export class ActivityService {
    getActivities = () => {
        return http.get("/Activity");
    }

    getActivityById = (id) => {
        return http.get(`/Activity/${id}`);
    }

    postActivity = (body) => {
        return http.post("/Activity", body);
    }

    putActivity = (id, body) => {
        return http.put(`/Activity/${id}`, body);
    }

    deleteActivity = (id) => {
        return http.delete(`/Activity/${id}`);
    }
}