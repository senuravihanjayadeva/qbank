import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const optionsAPI = {
  options() {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/options", config),
      fetchById: (id) => axios.get(baseUrl + "/api/options/" + id, config),
      create: (newOption) =>
        axios.post(baseUrl + "/api/options", newOption, config),
      update: (id, updatedOption) =>
        axios.put(baseUrl + "/api/options/" + id, updatedOption, config),
      delete: (id) => axios.delete(baseUrl + "/api/options/" + id, config),
    };
  },
};

export default optionsAPI;
