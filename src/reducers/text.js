import {TEXTCHANGE} from '../actions';
const initialState = {textLength: 0, textValue: 'initial value'};

export default (state = initialState, aciton) => {
  switch (aciton.type) {
    case TEXTCHANGE:
      return {textValue: aciton.textValue, textLength: aciton.textLength};
    default:
      return state;
  }
};