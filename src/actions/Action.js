export const ADD_NUMBER = "ADD_NUMBER";
export const ADD_OPERATOR = "ADD_OPERATOR";
export const CLEAR = "CLEAR";

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    number,
  };
}

export function addOperator(operator) {
  return {
    type: ADD_OPERATOR,
    operator,
  };
}

export function clear() {
  return {
    type: CLEAR,
  };
}
