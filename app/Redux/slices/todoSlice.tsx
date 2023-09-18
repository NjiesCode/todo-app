
// Define the type for a single todo item
type Todo = {
    id: number;
    text: string;
    completed: boolean;
  };
  
  // Define the type for the state
  type TodoState = {
    todos: Todo[];
  };
  
  // Define the type for the payload of the addTodo action
  type AddTodoPayload = {
    text: string;
  };
  
  import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  
  const initialState: TodoState = {
    todos: [],
  };
  
  export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
      addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
        const newTodo: Todo = {
          id: Date.now(), // You can use a unique identifier here
          text: action.payload.text,
          completed: false,
        };
        state.todos.push(newTodo);
      },
      removeTodo: (state, action: PayloadAction<number>) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
      toggleTodo: (state, action: PayloadAction<number>) => {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
      },
    },
  });
  
  export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
  
  export default todoSlice.reducer;
  
