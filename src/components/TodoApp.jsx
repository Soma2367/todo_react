import React, { useState } from 'react'
import { Todo } from '../utils/Todo'
import { TodoList } from './TodoList'
import { addButtonStyle, containerStyle, inputStyle } from '../styles/TodoAppStyles'

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

   const addTodo = () => {
    if(input.trim() === '') return;

    const newTodo = new Todo(input.trim());
    setTodos([...todos, newTodo])
    setInput('');
   }

  return (
    <div style={containerStyle}>
        <h2>Todoアプリ</h2>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={inputStyle}
        />
        <button onClick={addTodo} style={addButtonStyle}>追加</button>

        <TodoList todos={todos} />
    </div>
  )
}

export default TodoApp