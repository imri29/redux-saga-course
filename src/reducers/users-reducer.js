import { types } from '../actions/users';

const initialState = {
  items: []
};

export default function users(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USERS_SUCCESS: {
      console.log(state);
      return {
        ...state,
        items: payload.items
      };
    }
    case types.USERS_ERROR: {
      console.log(payload.error);
      return {
        ...state,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
}
