import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  INCREMENT_COUNTER2,
  SHOW_PRODUCT_VALUE,
} from "./3_types";

export const counterReducers = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + action.param };
    case DECREMENT_COUNTER:
      return { ...state, counter: state.counter - action.param };
    case INCREMENT_COUNTER2:
      return { ...state, counter2: state.counter2 + action.param };
    case SHOW_PRODUCT_VALUE:
      return {...state, product: action.product }
    default:
      return state;
  }
};
