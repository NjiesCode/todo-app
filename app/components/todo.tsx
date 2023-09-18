import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { removeTodo, toggleTodo } from "../Redux/slices/todoSlice"; // Import the Todo type from your slice
import { type } from "os";


const MyTodos = () => {
  const todos = useSelector((state: RootState) => state.todoSlice.todos);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos.map((todo ) => (
          <li key={todo.id}>
            {todo.text} - {todo.completed ? "Completed" : "Not Completed"}
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              Toggle
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Delete Todos
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyTodos;
