import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const questionsAPI = {
  questions() {
    return {
      fetchAll: () => axios.get(baseUrl + "/api/questions", config),
      fetchAllByTeacher: () => axios.get(baseUrl + "/api/questions", config),
      fetchById: (id) => axios.get(baseUrl + "/api/questions/" + id, config),
      create: (newQuestion) =>
        axios.post(baseUrl + "/api/questions", newQuestion, config),
      update: (updateQuestion) =>
        axios.put(baseUrl + "/api/questions", updateQuestion, config),
      delete: (id) => axios.delete(baseUrl + "/api/questions/" + id, config),
    };
  },
};
export default questionsAPI;
