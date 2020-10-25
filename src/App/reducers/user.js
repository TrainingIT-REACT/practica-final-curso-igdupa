import types from '../actions/types';

// Estado inicial
const initialState = {
  user: {
    name: "",
    user: "admin",
    pass: "1234",
  }
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_NAME:
      return {
        user: {
          name: action.name,
          user: state.user.user,
          pass: state.user.pass,
        }
      };
    default:
      return state;
  }
}

export default reducer;
