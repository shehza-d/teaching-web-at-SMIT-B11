import axios from 'axios'
import { useEffect, useState } from 'react'

export default function App() {
  const BASE_URL = 'http://localhost:5002'

  const [todos, setTodos] = useState([])

  const getTodo = async () => {
    const res = await axios(`${BASE_URL}/api/v1/todos`)
    const todosFromServer = res?.data?.data
    console.log('todosFromServer ', todosFromServer);

    setTodos(todosFromServer)
  }

  useEffect(() => {
    getTodo()
  }, [])

  const addTodo = async (event) => {

    try {
      event.preventDefault()

      const todoValue = event.target.children[0].value

      await axios.post(`${BASE_URL}/api/v1/todo`,
        {
          "todo": todoValue
        }
      )
      getTodo()
      
    } catch (err) {

    }
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-indigo-600 text-center mb-6">
          Todo App
        </h1>

        {/* Input Section */}
        <form
          onSubmit={addTodo}
          className="mb-6"
        >
          <input
            type="text"
            placeholder="Enter your task"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          />
        </form>

        {/* Add Task Button */}
        <button


          className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">
          Add Task
        </button>

        {/* Todo List */}
        <ul className="mt-6 space-y-4">
          {todos?.map((todo) => (
            <li className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200">
              <span className="text-gray-700">{todo.todoContent}</span>
              <div className="space-x-3">
                <button className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-700 focus:outline-none">
                  Delete
                </button>
              </div>
            </li>
          ))}


        </ul>
      </div>
    </div>
  );
}
