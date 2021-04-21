import { ACTION_TYPES } from "../actions/QuestionActions";

const initialState = {
  questionList: [],
  newQuestion: "",
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        questionList: [...action.payload],
      };
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        questionList: [...state.questionList, action.payload],
        newQuestion: action.payload,
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        questionList: state.questionList.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };
    case ACTION_TYPES.DELETE:
      return {
        ...state,
        questionList: state.questionList.filter(
          (x) => x.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
