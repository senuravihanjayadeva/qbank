import { ACTION_TYPES } from "../actions/QuestionPoolActions";

const initialState = {
  questionPoolList: [],
  currentQuestionPool: "",
};

export const questionPoolReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_ALL:
      return {
        ...state,
        questionPoolList: [...action.payload],
      };
    case ACTION_TYPES.CREATE:
      return {
        ...state,
        questionPoolList: [...state.questionPoolList, action.payload],
        currentQuestionPool: action.payload,
      };
    case ACTION_TYPES.UPDATE:
      return {
        ...state,
        questionPoolList: state.questionPoolList.map((x) =>
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
