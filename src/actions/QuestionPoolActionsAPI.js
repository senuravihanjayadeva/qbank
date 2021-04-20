import axios from "axios";
import authHeader from "../services/authHeader";

const baseUrl = "https://qbanksenura.herokuapp.com";

const config = {
  headers: authHeader(),
};

export default {
  questionpools() {
    return {
      fetchAll: () => axios.get(baseUrl, config),
      fetchAllByTeacher: () => axios.get(baseUrl, config),
      fetchById: (id) => axios.get(baseUrl + "/" + id, config),
      create: (newQuestionPool) =>
        axios.post(baseUrl + "/api/questionpools", newQuestionPool, config),
      update: (id, updateStudent) =>
        axios.put(baseUrl + "/" + id, updateStudent, config),
      delete: (id) => axios.delete(baseUrl + "/" + id, config),
    };
  },
};
