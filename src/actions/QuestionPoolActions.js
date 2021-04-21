import api from "../services/QuestionPoolAPI";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
  FETCH_ALL_BY_TEACHER: "FETCH_ALL_BY_TEACHER",
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

export const fetchAllByTeacher = (id) => (dispatch) => {
  api
    .questionpools()
    .fetchAllByTeacher(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_BY_TEACHER,
        payload: response.data.questionPools,
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
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch((err) => {
      OnFailure();
    });
};

export const update = (data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .questionpools()
    .update(data)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: { ...data },
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
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
