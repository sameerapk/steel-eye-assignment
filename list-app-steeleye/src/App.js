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

  const updateTodo = (item,title) => {
    const getExisitngTodos = [...todos]
    getExisitngTodos.map(todo=>{
      if(todo.id === item.id) {
        todo.text = title
      }
      else {
        return todo
      }
      return todo
    })
    setTodos(getExisitngTodos)
  }

  return (
    <div>
      <Todoform addNewTodo={addHandler}/>
      <Todolist todos={todos} delTodo={deleteTodo} updTodo={updateTodo}/>
    </div>
  )
}

export default App
