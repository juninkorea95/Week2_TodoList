import todos from "redux/modules/todos";
import Input from "redux/modules/Input";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      todos,
      Input
    }  
    })
export default store;