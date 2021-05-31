import { GlobalTypes } from '../../constants';

const initialState = {};

const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalTypes.NOTIFY:
      return action.payload;
    default:
      return state;
  }
};

export default notifyReducer;
