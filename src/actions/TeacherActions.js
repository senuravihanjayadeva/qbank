import api from "../services/TeacherAPI";

export const ACTION_TYPES = {
  FETCH_ALL_QUESTIONPOOL_BY_USERNAME: "FETCH_ALL_QUESTIONPOOL_BY_USERNAME",
};

export const fetchAllQuestionPoolsByUserName = () => (dispatch) => {
  api
    .teachers()
    .fetchAllQuestionPoolsByUserName()
    .then((response) => {
      console.log("teacherPool", response.data);
      dispatch({
        type: ACTION_TYPES.FETCH_ALL_QUESTIONPOOL_BY_USERNAME,
        payload: response.data,
      });
    })
    .catch(() => {});
};
