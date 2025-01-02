export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-indigo-600 text-center mb-6">
          Todo App
        </h1>

        {/* Input Section */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter your task"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
          />
        </div>

        {/* Add Task Button */}
        <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">
          Add Task
        </button>

        {/* Todo List */}
        <ul className="mt-6 space-y-4">
          {/* Task 1 */}
          <li className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200">
            <span className="text-gray-700">Sample Task 1</span>
            <div className="space-x-3">
              <button className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-700 focus:outline-none">
                Delete
              </button>
            </div>
          </li>

          {/* Task 2 */}
          <li className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200">
            <span className="text-gray-700">Sample Task 2</span>
            <div className="space-x-3">
              <button className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-700 focus:outline-none">
                Delete
              </button>
            </div>
          </li>

          {/* Task 3 */}
          <li className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200">
            <span className="text-gray-700">Sample Task 3</span>
            <div className="space-x-3">
              <button className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-700 focus:outline-none">
                Delete
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
