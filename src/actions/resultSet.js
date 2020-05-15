export const ADD_RESULT_SET = "ADD_RESULT_SET";
export const CLEAR_RESULT_SET = "CLEAR_RESULT_SET";

export function addResultSet(resultSet) {
  return {
    type: ADD_RESULT_SET,
    resultSet,
  };
}

export function clearResultSet() {
  return {
    type: CLEAR_RESULT_SET,
    resultSet: [],
  };
}
