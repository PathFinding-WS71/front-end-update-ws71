import http from "./http-common";

export class CommunityService {
    getCommunities = () => {
        return http.get("/communities");
    }

    getCommunityById = (id) => {
        return http.get(`/communities/${id}`);
    }

    postCommunity = (body) => {
        return http.post("/communities", body);
    }

    putCommunity = (id, body) => {
        return http.put(`/communities/${id}`, body);
    }

    deleteCommunity = (id) => {
        return http.delete(`/communities/${id}`);
    }
}