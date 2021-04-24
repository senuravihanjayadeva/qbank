import { ACTION_TYPES } from "../actions/QuestionActions";

const initialState = {
  questionList: [],
  newQuestion: "",
  updatedQuestion: "",
  deletedQuestion: "",
};

export const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        questionList: [...action.payload],
      };
    case ACTION_TYPES.CREATE_QUESTION:
      return {
        ...state,
        questionList: [...state.questionList, action.payload],
        newQuestion: action.payload,
      };
    case ACTION_TYPES.UPDATE_QUESTION:
      return {
        ...state,
        questionList: state.questionList.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
        updatedQuestion: action.payload,
      };
    case ACTION_TYPES.DELETE_QUESTION:
      return {
        ...state,
        questionList: state.questionList.filter(
          (x) => x.id !== action.payload.id
        ),
        deletedQuestion: action.payload.id,
      };
    default:
      return state;
  }
};
