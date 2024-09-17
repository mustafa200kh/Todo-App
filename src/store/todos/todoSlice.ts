import { createSlice } from "@reduxjs/toolkit";

type TTodo = { name: string; state: boolean };

interface ITodo {
  todolist: TTodo[];
}
const initialState: ITodo = { todolist: [] };

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      let itemFind = state.todolist.filter(
        (e) => e.name === action.payload.name
      );
      if (!itemFind.length) {
        state.todolist = [...state.todolist, action.payload];
      } else {
        state.todolist = [...state.todolist];
      }
    },
    deleteItem: (state, action) => {
      state.todolist = state.todolist.filter((el) => el.name != action.payload);
    },
    toggleItemState: (state, action) => {
      for (let i = 0; i < state.todolist.length; i++) {
        if (state.todolist[i].name === action.payload) {
          state.todolist[i].state = !state.todolist[i].state;
        }
      }
    },
    clearCompleted: (state) => {
      state.todolist = state.todolist.filter((el) => el.state != true);
    },
  },
});
export const { addNewItem, deleteItem, toggleItemState, clearCompleted } =
  todo.actions;

export default todo.reducer;
