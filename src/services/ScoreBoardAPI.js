import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

export default {
  scoreboard() {
    return {
      finishQuiz: (user_id, question_pool_id) =>
        axios.put(
          baseUrl + `/api/scoreboard/finishquiz/${user_id}/${question_pool_id}`,
          "",
          config
        ),
      finishedUserScoreBoard: (user_id, question_pool_id) =>
        axios.post(
          baseUrl +
            `/api/scoreboard/finalscoreboard/${user_id}/${question_pool_id}`,
          "",
          config
        ),
      getCurrentUserScoreBoard: (user_id, question_pool_id) =>
        axios.post(
          baseUrl + `/api/scoreboard/${user_id}/${question_pool_id}`,
          "",
          config
        ),
    };
  },
};
