import { ACTION_TYPES } from "../actions/TeacherActions";

const initialState = {
  teacherQuestionPoolListByUsername: [],
};

export const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL_QUESTIONPOOL_BY_USERNAME:
      return {
        ...state,
        teacherQuestionPoolListByUsername: [...action.payload],
      };
    default:
      return state;
  }
};
