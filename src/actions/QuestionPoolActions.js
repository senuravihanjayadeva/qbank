import api from "./QuestionPoolActionsAPI";

export const ACTION_TYPES = {
  CREATE: "CREATE",
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
    .questionpools()
    .create(data)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch((err) => {
      console.log(err);
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
