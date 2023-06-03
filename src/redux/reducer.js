import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },

    // add new lists
    addLists: (state, action) => {
      state.push(action.payload);
      return state;        
    },

    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item
          };
        }
        return todo;
      });
    }
  }
});

export const {
  addTodos,
  addLists,
  updateTodos
} = addTodoReducer.actions;

export const reducer = addTodoReducer.reducer;