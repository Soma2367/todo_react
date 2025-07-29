import React from 'react'
import { TodoList } from './TodoList'

export const TodoItem = ({todo, index}) => {
  return (
    <li style={{ listStyle: "none" }}>
        <p key={index}>{todo}</p>
    </li>
  )
}
