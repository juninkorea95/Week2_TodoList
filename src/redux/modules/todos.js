import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id : 1, title: '리액트', content: '리액트 공부하기', isDone : 0},
    {id : 2, title: '알고리즘', content: '알고리즘 공부하기', isDone : 1}
   ]

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        Add: (state, action) => {
            return [...state, action.payload]
        },

        Delete: (state, action) => {
            return state.filter((todo) => {return todo.id !== action.payload})
        },
        
        Done: (state, action) => {
            return state.map((todo) => (todo.id === action.payload ) ? {...todo, isDone: 1} : todo)
        },

        Cancel: (state, action) => {
            return state.map((todo) => (todo.id === action.payload) ? {...todo, isDone: 0} : todo)
        },

    }

});

export default todosSlice.reducer
export const {Add, Delete, Done, Cancel} = todosSlice.actions