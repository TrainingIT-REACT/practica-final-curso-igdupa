// Definimos la lista de acciones
const actions = [
  // Playlist
  "ADD_SONGS",
  "CLEAR_PLAYLIST",

  // Usuarios
  "UPDATE_NAME"
];

// Las convertimos en un objeto
const actionTypes = {};
actions.forEach(action => {
  actionTypes[action] = action;
});

export default actionTypes;
