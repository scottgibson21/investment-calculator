import { ADD_RESULT_SET, CLEAR_RESULT_SET } from "../actions/resultSet";

export default function results(state = {}, action) {
  // let test = {
  //   resultSet: [...action.resultSet],
  // };

  switch (action.type) {
    case ADD_RESULT_SET:
      return {
        ...state,
        resultSet: action.resultSet,
      };
    case CLEAR_RESULT_SET:
      return {
        ...state,
        resultSet: [],
      };
    default:
      return state;
  }
}
