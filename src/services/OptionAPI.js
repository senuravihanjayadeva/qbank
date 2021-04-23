import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = "https://qbanksenura.herokuapp.com";

const config = {
  headers: authHeader(),
};

export default {
  options() {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/options", config),
      fetchById: (id) => axios.get(baseUrl + "/api/options" + "/" + id, config),
      create: (newOption) =>
        axios.post(baseUrl + "/api/options", newOption, config),
      update: (id, updatedOption) =>
        axios.put(baseUrl + "/api/options" + "/" + id, updatedOption, config),
      delete: (id) => axios.delete(baseUrl + "/api/options" + "/" + id, config),
    };
  },
};
