import { createStore, combineReducers } from "redux";
import playlist from './reducers/playlist';
import user from './reducers/user';

const store = createStore(
    combineReducers({
        playlist,
        user
    })
);

export default store;