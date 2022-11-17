import { createStore } from "redux";

const initialState = {
  counter: 0,
};
const INCREAMENT = "INCREAMENT";
const DECREMENT = "DECREMENT";
const INCREAMENTBY2 = "INCREAMENTBY2";
const DECREMENTBY2 = "DECREMENTBY2";

export const increment = () => {
  return {
    type: INCREAMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const incrementby2 = () => {
  return {
    type: INCREAMENTBY2,
  };
};

export const decrement2 = () => {
  return {
    type: DECREMENTBY2,
  };
};
export const decrement5 = () => {
  return {
    type: "decrement5",
  };
};
export const increment5 = () => {
  return {
    type: "increment5",
  };
};
const counterReducer = (state = initialState, action) => {
  if (action.type === INCREAMENT) {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === INCREAMENTBY2) {
    return {
      ...state,
      counter: state.counter + 2,
    };
  }
  if (action.type === DECREMENTBY2) {
    return {
      ...state,
      counter: state.counter - 2,
    };
  }
  if (action.type === DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "increment5") {
    return {
      counter: state.counter + 5,
    };
  }
  if (action.type === "decrement5") {
    return {
      counter: state.counter - 5,
    };
  }
  return state;
};

const store = createStore(counterReducer);
export default store;
