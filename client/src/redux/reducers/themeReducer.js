import { GlobalTypes } from '../../constants';

const initialState = false;

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalTypes.THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
