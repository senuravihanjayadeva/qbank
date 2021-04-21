import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = "https://qbanksenura.herokuapp.com";

const config = {
  headers: authHeader(),
};

export default {
  students() {
    return {
      fetchAll: () => axios.get(baseUrl, config),
      fetchById: (id) => axios.get(baseUrl + "/" + id, config),
      create: (newStudent) =>
        axios.post(baseUrl + "/api/auth/signup", newStudent),
      update: (id, updateStudent) =>
        axios.put(baseUrl + "/" + id, updateStudent, config),
      delete: (id) => axios.delete(baseUrl + "/" + id, config),
    };
  },
};
