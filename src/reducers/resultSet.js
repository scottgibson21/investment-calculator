import { ADD_RESULT_SET, CLEAR_RESULT_SET } from "../actions/resultSet";

export default function resultSet(state = [], action) {
  switch (action.type) {
    case ADD_RESULT_SET:
      return {
        resultSet: [...action.resultSet],
      };
    case CLEAR_RESULT_SET:
      return {
        state: [],
      };
    default:
      return state;
  }
}
