import types from '../actions/types';

// Estado inicial
const initialState = {
  media: { list: [], total: 0, position: 0 }
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SONGS:
      var list = [...state.media.list.concat(action.songs)];
      var total = list.length;
      return {
        media: {
          list,
          total,
          position: state.media.position,
        },
      };
    case types.CLEAR_PLAYLIST:
      return {
        media: { list: [], total: 0, position: 0 }
      };
    case types.CHANGE_POSITION:
      var position;
      if (action.position < state.media.total && action.position >= 0)
        position = action.position;
      else
        position = state.media.position;

      return {
        media: {
          list: state.media.list,
          total: state.media.total,
          position,
        },
      };
    default:
      return state;
  }
}

export default reducer;