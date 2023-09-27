import http from "./http-common";

export class CommunityService {
    getCommunities = () => {
        return http.get("/Community");
    }

    getCommunityById = (id) => {
        return http.get(`/Community/${id}`);
    }

    postCommunity = (body) => {
        return http.post("/Community", body);
    }

    putCommunity = (id, body) => {
        return http.put(`/Community/${id}`, body);
    }

    deleteCommunity = (id) => {
        return http.delete(`/Community/${id}`);
    }
}