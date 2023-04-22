import { ADD_NUMBER, ADD_OPERATOR, CLEAR } from "../actions/Action";

const initialState = {
  displayValue: "0",
  operator: null,
  firstOperand: null,
  waitingForSecondOperand: false,
};

export default function calculator(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      if (state.waitingForSecondOperand) {
        return {
          ...state,
          displayValue: action.number.toString(),
          waitingForSecondOperand: false,
        };
      } else if (state.displayValue === "0") {
        return {
          ...state,
          displayValue: action.number.toString(),
        };
      } else {
        return {
          ...state,
          displayValue: state.displayValue + action.number.toString(),
        };
      }
    case ADD_OPERATOR:
      const inputValue = parseFloat(state.displayValue);
      if (state.firstOperand === null) {
        return {
          ...state,
          firstOperand: inputValue,
          waitingForSecondOperand: true,
          operator: action.operator,
        };
      } else {
        const result = calculate(
          state.firstOperand,
          inputValue,
          state.operator
        );
        return {
          displayValue: result.toString(),
          firstOperand: result,
          waitingForSecondOperand: true,
          operator: action.operator,
        };
      }
    case CLEAR:
      return initialState;
    default:
      return state;
  }
}

function calculate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
}
