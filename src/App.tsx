import { useState, ChangeEvent } from "react";

interface Task {
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 To-Do List</h1>
      <div className="flex mb-4">
        <input
          className="flex-grow border p-2 mr-2 rounded"
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 mb-2 border rounded ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <span onClick={() => toggleTask(index)} className="cursor-pointer flex-grow">
              {task.text}
            </span>
            <button
              onClick={() => removeTask(index)}
              className="ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
