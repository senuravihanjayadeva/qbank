import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const questionpoolsAPI = {
  questionpools() {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/questionpools", config),
      fetchAllByTeacher: (id) =>
        axios.get(baseUrl + "/api/moderators/" + id, config),
      fetchById: (id) =>
        axios.get(baseUrl + "/api/questionpools/" + id, config),
      create: (newQuestionPool) =>
        axios.post(baseUrl + "/api/questionpools", newQuestionPool, config),
      update: (updatedQuestionPool) =>
        axios.put(baseUrl + "/api/questionpools", updatedQuestionPool, config),
      delete: (id) =>
        axios.delete(baseUrl + "/api/questionpools/" + id, config),
    };
  },
};
export default questionpoolsAPI;
