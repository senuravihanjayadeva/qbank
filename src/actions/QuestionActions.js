import api from "../services/QuestionAPI";

export const ACTION_TYPES = {
  CREATE_QUESTION: "CREATE_QUESTION",
  UPDATE_QUESTION: "UPDATE_QUESTION",
  DELETE_QUESTION: "DELETE_QUESTION",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  api
    .questionpools()
    .fetchAll()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const create = (data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .questions()
    .create(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CREATE_QUESTION,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const updateQuestion = (data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .questions()
    .update(data)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.UPDATE_QUESTION,
        payload: { ...data },
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const DeleteQuestion = (id, OnSuccess, OnFailure) => (dispatch) => {
  api
    .questions()
    .delete(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE_QUESTION,
        payload: { id },
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};
