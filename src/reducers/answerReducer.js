import { ACTION_TYPES } from "../actions/AnswerActions";

const initialState = {
  newAnswer: "",
  deletedAnswer: "",
};

export const answerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_ANSWER:
      return {
        ...state,
        newAnswer: action.payload,
      };
    case ACTION_TYPES.UPDATE_ANSWER:
      return {
        ...state,
      };
    case ACTION_TYPES.DELETE_ANSWER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
