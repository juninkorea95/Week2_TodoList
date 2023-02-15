import {createStore} from "redux"
import { combineReducers } from "redux";
import todos from "redux/modules/todos";
import Input from "redux/modules/Input";

const rootReducer = combineReducers({
    todos,
    Input
});
const store = createStore(rootReducer); 
export default store;