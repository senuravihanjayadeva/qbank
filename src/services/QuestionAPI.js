import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = "https://qbanksenura.herokuapp.com";

const config = {
  headers: authHeader(),
};

export default {
  questions() {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/questions", config),
      fetchAllByTeacher: () => axios.get(baseUrl + "/api/questions", config),
      fetchById: (id) =>
        axios.get(baseUrl + "/api/questions" + "/" + id, config),
      create: (newQuestion) =>
        axios.post(baseUrl + "/api/questions", newQuestion, config),
      update: (id, updateStudent) =>
        axios.put(baseUrl + "/api/questions" + "/" + id, updateStudent, config),
      delete: (id) =>
        axios.delete(baseUrl + "/api/questions" + "/" + id, config),
    };
  },
};
