import React, { useState } from 'react'

const Todoform = (props) => {
    const [text,setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addNewTodo(text)
        setText('')
    }
    return (
        <form onSubmit={handleSubmit}>
          <input 
          type='text'
            name='todoAdd'
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button>Add todo</button>
        </form>
    )
}

export default Todoform
