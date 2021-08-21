import React, { useState } from 'react'
import Todoform from './components/Todoform'
import Todolist from './components/Todolist'

const App = () => {
  const [todos,setTodos] = useState([])
  
  const addHandler = (text) => {
    setTodos([...todos, {id: Math.floor(Math.random() * 1000000), text}])  
  }

  const deleteTodo = (item) => {
    setTodos(todos.filter(todo=>todo.id !== item.id))
  }

  return (
    <div>
      <Todoform addNewTodo={addHandler}/>
      <Todolist todos={todos} delTodo={deleteTodo}/>
    </div>
  )
}

export default App
