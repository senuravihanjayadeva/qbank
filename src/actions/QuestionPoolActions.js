import api from "../services/QuestionPoolAPI";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE_QUESTIONPOOL: "DELETE_QUESTIONPOOL",
  FETCH_BY_ID: "FETCH_BY_ID",
  FETCH_ALL: "FETCH_ALL",
  FETCH_ALL_BY_TEACHER: "FETCH_ALL_BY_TEACHER",
};

export const fetchById = (id) => (dispatch) => {
  api
    .questionpools()
    .fetchById(id)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: ACTION_TYPES.FETCH_BY_ID,
        payload: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
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
    .catch(() => {
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

export const DeleteQuestionPool = (id, OnSuccess, OnFailure) => (dispatch) => {
  api
    .questionpools()
    .delete(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE_QUESTIONPOOL,
        payload: { id },
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};
