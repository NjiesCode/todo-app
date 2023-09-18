
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/slices/todoSlice';

function AddTodo() {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ text: input }));
    setInput("");
  };

  return (
    <div>
      <h2>Add Todos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter todo text"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
