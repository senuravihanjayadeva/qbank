import api from "../services/QuestionAPI";

export const ACTION_TYPES = {
  CREATE_QUESTION: "CREATE_QUESTION",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
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

export const update = (id, data, OnSuccess) => (dispatch) => {
  api
    .questionpools()
    .update(id, data)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { id, ...data },
      });
      OnSuccess();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const Delete = (id, OnSuccess) => (dispatch) => {
  api
    .questionpools()
    .delete(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: { id },
      });
      OnSuccess();
    })
    .catch((err) => {
      console.log(err);
    });
};
