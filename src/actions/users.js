export const types = {
  GET_USERS_REQUEST: 'users/get_users_requests',
  GET_USERS_SUCCESS: 'users/get_users_success',
  CREATE_USER_REQUEST: 'users/create_user_request',
  DELETE_USER_REQUEST: 'users/delete_users_request',
  USERS_ERROR: 'users/USERS_ERROR'
};

export const getUsersRequest = () => ({
  type: types.GET_USERS_REQUEST
});

export const getUsersSuccess = ({ items, dogs }) => ({
  type: types.GET_USERS_SUCCESS,
  payload: { items, dogs }
});

export const createUserRequest = ({ lastName, firstName }) => {
  return {
    type: types.CREATE_USER_REQUEST,
    payload: { firstName, lastName }
  };
};

export const deleteUserRequest = userId => {
  return {
    type: types.DELETE_USER_REQUEST,
    payload: { userId }
  };
};

export const usersError = ({ error }) => {
  return {
    type: types.USERS_ERROR,
    payload: { error }
  };
};
