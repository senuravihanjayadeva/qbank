import { ACTION_TYPES } from "../actions/QuestionPoolActions";

const initialState = {
  questionPoolList: [],
  teacherQuestionPoolList: [],
  currentQuestionPool: "",
};

export const questionPoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        questionPoolList: [...action.payload],
      };
    case ACTION_TYPES.FETCH_ALL_BY_TEACHER:
      return {
        ...state,
        teacherQuestionPoolList: [...action.payload],
      };
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        questionPoolList: [...state.questionPoolList, action.payload],
        teacherQuestionPoolList: [
          ...state.teacherQuestionPoolList,
          action.payload,
        ],
        currentQuestionPool: action.payload,
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        questionPoolList: state.questionPoolList.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
        teacherQuestionPoolList: state.teacherQuestionPoolList.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };
    case ACTION_TYPES.DELETE:
      return {
        ...state,
        questionPoolList: state.questionPoolList.filter(
          (x) => x.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
