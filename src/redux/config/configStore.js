import {createStore} from "redux"
import { combineReducers } from "redux";
import title from "redux/modules/title";
import content from "redux/modules/content";
import todos from "redux/modules/todos";

const rootReducer = combineReducers({
    todos,
    title,
    content,
});
const store = createStore(rootReducer); 
export default store;