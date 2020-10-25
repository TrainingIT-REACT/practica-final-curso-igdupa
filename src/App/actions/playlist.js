import types from './types';

export const addSongs = (songs) => ({
  type: types.ADD_SONGS,
  songs
});

export const clearPlaylist = () => ({
  type: types.CLEAR_PLAYLIST
});

export const changePosition = (position) => ({
  type: types.CHANGE_POSITION,
  position
});