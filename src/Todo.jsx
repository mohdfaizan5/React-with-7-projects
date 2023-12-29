import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";


function Todo() {
  const [todos, setTodos] = useState([
    {
      id: 10,
      title: "Do Laundry",
      isCompleted: true
    },
    {
      id: 11,
      title: "Complete React",
      isCompleted: false
    },
    {
      id: 13,
      title: "Maths is shi*t",
      isCompleted: true
    },
    {
      id: 16,
      title: "Maths is shi*t",
      isCompleted: true
    },
  ])

  const [todoInput, setTodoInput] = useState('')

  const checkTodo = (id) => {
    const newTodos = todos.map(todo => todo.id == id ? { ...todo, isCompleted: (todo.isCompleted ? false : true) } : todo)
    console.log(newTodos)
    setTodos(newTodos)
  }

  const addTodo = () => {
    console.log('Adding new todo')
    setTodos([...todos, {
      id: todos.length,
      title: todoInput,
      isCompleted: false
    }])

  }

  const removeTodo = (id) => {
    console.log(id)
    setTodos(todos.filter(todo => todo.id != id))
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl py-8'>Todo</h1>

      <ul className='flex flex-col border p-7 rounded shadow-2xl w-72 gap-1'>

        <form className='flex mb-3' onSubmit={(e) => {
          e.preventDefault()
          addTodo()
        }
        }>

          <input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} type="text" className='border-2 border-black rounded-sm px-1' />
          <button type='submit' className='flex bg-black py-2 px-2 text-white gap-0.5'>
            Add
            <IoMdAddCircleOutline className='text-2xl' />
          </button>
        </form>

        {todos.map((todo, i) => (

          <li key={i + 1} className='flex items-center'>
            <input type="checkbox" className='mr-3' defaultChecked={todo.isCompleted} id={i + 1} onClick={() => checkTodo(todo.id)} />
            <div className='flex justify-between w-full'>

              <label className='flex items-center' htmlFor={i + 1}>
                {todo.title}
              </label>
              <MdDeleteForever className="text-xl hover:text-red-600 active:animate-ping" onClick={() => removeTodo(todo.id)} />
            </div>
          </li>
        ))}

      </ul>

    </div>
  )
}

export default Todo