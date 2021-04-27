import api from "../services/ScoreBoardAPI";

export const ACTION_TYPES = {
  FINISH_QUIZ: "FINISH_QUIZ",
  FINISHED_USER_SCOREBOARD: "FINISHED_USER_SCOREBOARD",
  CURRENT_USER_SCOREBOARD: "CURRENT_USER_SCOREBOARD",
};

export const finishedUserScoreBoard = (
  id,
  questionpoolid,
  OnSuccess,
  OnFailure
) => (dispatch) => {
  api
    .scoreboard()
    .finishedUserScoreBoard(id, questionpoolid)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FINISHED_USER_SCOREBOARD,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const finishQuiz = (id, questionpoolid, OnSuccess, OnFailure) => (
  dispatch
) => {
  api
    .scoreboard()
    .finishQuiz(id, questionpoolid)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FINISH_QUIZ,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const getCurrentUserScoreBoard = (
  id,
  questionpoolid,
  OnSuccess,
  OnFailure
) => (dispatch) => {
  api
    .scoreboard()
    .getCurrentUserScoreBoard(id, questionpoolid)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CURRENT_USER_SCOREBOARD,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};
