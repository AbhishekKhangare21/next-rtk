const { nanoid, createSlice } = require("@reduxjs/toolkit");

const initialState = {
  todos: [],
};

const Slice = createSlice({
  name: "todoSlice",
  initialState,
  reducer: {
    addTodos: (state, action) => {
      const data = {
        id: nanoid,
        name: action.payload,
      };
      state.todos.push(data);
    },
  },
});

export const { addTodos } = Slice.actions;
export default Slice.reducer;
