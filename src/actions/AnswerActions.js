import api from "../services/AnswerAPI";

export const ACTION_TYPES = {
  CREATE_ANSWER: "CREATE_ANSWER",
  UPDATE_ANSWER: "UPDATE_ANSWER",
  DELETE_ANSWER: "DELETE_ANSWER",
};

export const createanswer = (data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .answers()
    .create(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CREATE_ANSWER,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const update = (id, data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .answers()
    .update(id, data)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.UPDATE_ANSWER,
        payload: { id, ...data },
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const deleteanswer = (id, OnSuccess, OnFailure) => (dispatch) => {
  api
    .answers()
    .delete(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE_ANSWER,
        payload: { id },
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};
