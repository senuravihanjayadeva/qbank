import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = "https://qbanksenura.herokuapp.com";

const config = {
  headers: authHeader(),
};

export default {
  questionpools() {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/questionpools", config),
      fetchAllByTeacher: (id) =>
        axios.get(baseUrl + "/api/moderators/" + id, config),
      fetchById: (id) => axios.get(baseUrl + "/" + id, config),
      create: (newQuestionPool) =>
        axios.post(baseUrl + "/api/questionpools", newQuestionPool, config),
      update: (updatedQuestionPool) =>
        axios.put(baseUrl + "/api/questionpools", updatedQuestionPool, config),
      delete: (id) => axios.delete(baseUrl + "/" + id, config),
    };
  },
};
