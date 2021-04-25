import api from "../services/CheckAnswerAPI";

export const ACTION_TYPES = {
  CHECK_ANSWER: "CHECK_ANSWER",
  FETCH_ANSWERED_SCORE_RECORDS: "FETCH_ANSWERED_SCORE_RECORDS",
  FETCH_ANSWERED_QUESTION_IDS: "FETCH_ANSWERED_QUESTION_IDS",
};

export const checkAnswer = (data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .checkanswers()
    .checkAnswer(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CHECK_ANSWER,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const fetchAnsweredScoreRecords = (
  user_id,
  question_pool_id,
  OnSuccess,
  OnFailure
) => (dispatch) => {
  api
    .checkanswers()
    .fetchAnsweredScoreRecords(user_id, question_pool_id)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: ACTION_TYPES.FETCH_ANSWERED_SCORE_RECORDS,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const fetchAnsweredQuestionIDs = (
  user_id,
  question_pool_id,
  OnSuccess,
  OnFailure
) => (dispatch) => {
  api
    .checkanswers()
    .fetchAnsweredQuestionIDs(user_id, question_pool_id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ANSWERED_QUESTION_IDS,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};
