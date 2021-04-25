import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

export default {
  teachers() {
    return {
      fetchAllQuestionPoolsByUserName: () =>
        axios.get(baseUrl + "/api/moderators/questionpool", config),
    };
  },
};
