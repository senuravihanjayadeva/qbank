import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

export default {
  answers() {
    return {
      create: (newAnswer) =>
        axios.post(baseUrl + "/api/answers", newAnswer, config),
      update: (id, updatedAnswer) =>
        axios.put(baseUrl + "/api/answers/" + id, updatedAnswer, config),
      delete: (id) => axios.delete(baseUrl + "/api/answers/" + id, config),
    };
  },
};
