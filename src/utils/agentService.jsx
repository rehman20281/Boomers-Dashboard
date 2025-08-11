import {http} from "../utils/httpService";

export const getAgents = () => http.get("/admin/agents/list");
export const getAgentById = (id) => http.get(`/admin/agent/id/${id}`);
// export const createUser = (data) => http.post("/users", data);
export const updateUser = (id, data) =>  http.put(`/api/v1/admin/agent/${id}`, data);
// export const deleteUser = (id) => http.delete(`/users/${id}`);
