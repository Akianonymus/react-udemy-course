import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: action.value, isTouched: state.isTouched };
    case "BLUR":
      return { isTouched: true, value: state.value };
    case "RESET":
      return { isTouched: false, value: "" };
    default:
      break;
  }

  return inputStateReducer;
};

const useInput = (validate) => {
  const [inputState, dispatchState] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValid = validate(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const changeHandler = (event) => {
    dispatchState({ type: "INPUT", value: event.target.value });
  };

  const blurHandler = () => {
    dispatchState({ type: "BLUR" });
  };

  const reset = () => {
    dispatchState({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
