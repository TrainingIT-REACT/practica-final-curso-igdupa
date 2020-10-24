import types from '../actions/types';

// Estado inicial
const initialState = {
  list: []
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SONGS:
      return {
        list: [...state.list.concat(action.songs)],
      };
    case types.CLEAR_PLAYLIST:
      return {
        list: []
      }
    default:
      return state;
  }
}

export default reducer;