import {http} from "../utils/httpService";

export const getAgents = () => http.get("/admin/agents/list");
export const getAgentById = (id) => http.get(`/admin/agent/id/${id}`);
export const updateAgent = (data, id) => http.postFormData(`/admin/agent/${id}`, data, {
  headers: {}, // no need to set Content-Type manually
});
// export const updateUser = (id, data) =>  http.put(`/admin/agent/${id}`, data);
// export const deleteUser = (id) => http.delete(`/users/${id}`);
