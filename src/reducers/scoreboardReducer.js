import { ACTION_TYPES } from "../actions/ScoreBoardActions";

const initialState = {
  isFinished: "",
  currentUserScoreBoard: "",
};

export const scoreboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FINISH_QUIZ:
      return {
        ...state,
        isFinished: action.payload,
      };
    case ACTION_TYPES.CURRENT_USER_SCOREBOARD:
      return {
        ...state,
        currentUserScoreBoard: action.payload,
      };
    default:
      return state;
  }
};
