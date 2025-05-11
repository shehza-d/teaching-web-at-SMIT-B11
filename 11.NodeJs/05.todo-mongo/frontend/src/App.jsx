import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const getUrl = () => {
  const isHosted = window.location.href.includes("https");

  const baseUrl = isHosted
    ? "https://tesitng-server-hosting.vercel.app"
    : "http://localhost:5002";
  return baseUrl;
};

export default function App() {
  const [todos, setTodos] = useState([]);

  const getTodo = async () => {
    try {
      const res = await axios(`${getUrl()}/api/v1/todos`);
      const todosFromServer = res?.data?.data;

      setTodos(todosFromServer);
    } catch (err) {
      toast.dismiss();
      toast.error(err?.response?.data?.message || "unknown errorrr");
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const addTodo = async (event) => {
    try {
      event.preventDefault();

      const todoValue = event.target.children[0].value;

      await axios.post(`${getUrl()}/api/v1/todo`, {
        todo: todoValue,
      });
      getTodo();

      event.target.reset();
    } catch (err) {
      console.log("err:", err);

      toast.dismiss();
      toast.error(err?.response?.data?.message || "unknown errorrr");
    }
  };

  const editTodo = async (event, todoId) => {
    try {
      event.preventDefault();

      const todoValue = event.target.children[0].value;

      await axios.patch(`${getUrl()}/api/v1/todo/${todoId}`, {
        todoContent: todoValue,
      });
      getTodo();

      event.target.reset();
    } catch (err) {
      toast.dismiss();
      toast.error(err?.response?.data?.message || "unknown errorrr");
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      console.log("todoId ", todoId);

      const res = await axios.delete(`${getUrl()}/api/v1/todo/${todoId}`);

      console.log("data ", res.data);

      toast(res.data?.message);

      getTodo();
    } catch (err) {
      console.log("mera error", err);

      toast.error(err?.response?.data?.message || "unknown errorrr");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-indigo-600 text-center mb-6">
          Todo App
        </h1>

        {/* Input Section */}
        <form onSubmit={addTodo} className="mb-6 flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter your task"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          />
          <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">
            Add Task
          </button>
        </form>

        {!todos?.length && "todo nhi hy"}

        {/* Todo List */}
        <ul className="mt-6 space-y-4">
          {todos?.map((todo, index) => (
            <li
              key={todo._id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200"
            >
              {!todo.isEditing ? (
                <span className="text-gray-700">{todo.todoContent}</span>
              ) : (
                <form onSubmit={(e) => editTodo(e, todo._id)}>
                  <input
                    type="text"
                    defaultValue={todo.todoContent}
                    className="border border-gray-400"
                  />
                  <button
                    onClick={() => {
                      const newTodos = todos.map((todo, i) => {
                        todo.isEditing = false;
                        return todo;
                      });
                      setTodos([...newTodos]);
                    }}
                    type="button"
                  >
                    cancel
                  </button>
                  <button type="submit">Save</button>
                </form>
              )}

              <div className="space-x-3">
                {!todo.isEditing ? (
                  <button
                    onClick={() => {
                      const newTodos = todos.map((todo, i) => {
                        if (i === index) {
                          todo.isEditing = true;
                        } else {
                          todo.isEditing = false;
                        }
                        return todo;
                      });

                      // todos[index].isEditing = true
                      setTodos([...newTodos]);
                    }}
                    className="text-indigo-600 hover:text-indigo-700 focus:outline-none"
                  >
                    Edit
                  </button>
                ) : null}

                {!todo.isEditing ? (
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="text-red-600 hover:text-red-700 focus:outline-none"
                  >
                    Delete
                  </button>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
