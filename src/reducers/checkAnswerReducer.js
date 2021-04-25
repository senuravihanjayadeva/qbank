import { ACTION_TYPES } from "../actions/CheckAnswerActions";

const initialState = {
  checkAnswer: "",
  userQuestionPoolScoredBoard: [],
  answeredQuestions: [],
};

export const checkAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHECK_ANSWER:
      return {
        ...state,
        checkAnswer: action.payload,
      };
    case ACTION_TYPES.FETCH_ANSWERED_SCORE_RECORDS:
      return {
        ...state,
        userQuestionPoolScoredBoard: [...action.payload],
      };
    case ACTION_TYPES.FETCH_ANSWERED_QUESTION_IDS:
      return {
        ...state,
        answeredQuestions: [...action.payload],
      };
    default:
      return state;
  }
};
