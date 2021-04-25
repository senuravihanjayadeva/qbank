import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

export default {
  checkanswers() {
    return {
      checkAnswer: (checkAnswer) =>
        axios.post(baseUrl + "/api/checkanswers", checkAnswer, config),
      fetchAnsweredScoreRecords: (user_id, question_pool_id) =>
        axios.post(
          baseUrl + `/api/checkanswers/answered/${user_id}/${question_pool_id}`,
          "",
          config
        ),
      fetchAnsweredQuestionIDs: (user_id, question_pool_id) =>
        axios.post(
          baseUrl +
            `/api/checkanswers/answeredquestions/${user_id}/${question_pool_id}`,
          "",
          config
        ),
    };
  },
};
