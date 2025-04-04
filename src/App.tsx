import { useState, ChangeEvent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container py-5">
      <div className="text-center mb-4">
        <img
          src="https://www.gene.com/assets/frontend/img/social.png"
          alt="Genentech Logo"
          className="img-fluid"
          style={{ maxHeight: "60px" }}
        />
        <h1 className="mt-3">📝 To-Do List</h1>
        <p className="text-muted">
          This app is made to demonstrate my skills in React JS.
        </p>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={input}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? "text-decoration-line-through text-muted" : ""
            }`}
          >
            <span
              onClick={() => toggleTask(index)}
              style={{ cursor: "pointer", flexGrow: 1 }}
            >
              {task.text}
            </span>
            <button
              className="btn btn-sm btn-danger ms-2"
              onClick={() => removeTask(index)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
