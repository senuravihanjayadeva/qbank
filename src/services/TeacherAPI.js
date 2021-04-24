import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = "https://qbanksenura.herokuapp.com";

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
