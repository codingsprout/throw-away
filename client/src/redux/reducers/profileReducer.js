import { GlobalTypes } from '../../constants';

const initialState = {
  loading: false,
  users: [],
  posts: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GlobalTypes.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case GlobalTypes.GET_USER:
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };

    default:
      return state;
  }
};

export default profileReducer;
