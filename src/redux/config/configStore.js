import {createStore} from "redux"
import { combineReducers } from "redux";
import todos from "redux/modules/todos";
import title from "redux/modules/title";
import content from "redux/modules/content";

// state의 묶음이 modules에 저장된 후 그것을 여기 combineReducers의 인자로 갖고와서 객체 형태로 넣어줄거다. 
// 모든 state 묶음이 rootReducer에 모이면서 props를 내려주지 않고도 중앙데이터저장소에서 data를 뽑아 쓸 수 있게된다. 
// todos.js 의 reducer가 리턴한 값이 여기로 들어오는거다. 
// state는 상태, reducer는 제어로 보면 된다.
const rootReducer = combineReducers({
    todos,
    title,
    content,
});
const store = createStore(rootReducer); // 인자로는 reducer의 묶음이 들어가야한다!

export default store;