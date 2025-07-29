import React from 'react'
import TodoApp from './TodoApp'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos}) => {
  return (
    <ul style={{ padding: 0, listStyle: "none", marginTop: "20px" }}>
        {todos.map((todo, index) => (
            <TodoItem
             key={index}
             todo={todo.text}
            />
        ))}
    </ul>
  )
}
