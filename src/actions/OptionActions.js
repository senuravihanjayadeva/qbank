import api from "../services/OptionAPI";

export const ACTION_TYPES = {
  CREATE_OPTION: "CREATE_OPTION",
  UPDATE: "UPDATE",
  DELETE_OPTION: "DELETE_OPTION",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  api
    .options()
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

export const createoption = (id, data, OnSuccess, OnFailure) => (dispatch) => {
  api
    .options()
    .create(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.CREATE_OPTION,
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
    .options()
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

export const DeleteOption = (id, OnSuccess, OnFailure) => (dispatch) => {
  api
    .options()
    .delete(id)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE_OPTION,
        payload: { id },
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};
