import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const addTask = () => {
        if (input.trim()) {
            setTasks([...tasks, { text: input, completed: false }]);
            setInput("");
        }
    };
    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
        setTasks(updatedTasks);
    };
    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };
    const handleInputChange = (e) => {
        setInput(e.target.value);
    };
    return (_jsxs("div", { className: "p-4 max-w-md mx-auto", children: [_jsx("h1", { className: "text-2xl font-bold mb-4", children: "\uD83D\uDCDD To-Do List" }), _jsxs("div", { className: "flex mb-4", children: [_jsx("input", { className: "flex-grow border p-2 mr-2 rounded", type: "text", placeholder: "Add a new task...", value: input, onChange: handleInputChange }), _jsx("button", { onClick: addTask, className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600", children: "Add" })] }), _jsx("ul", { children: tasks.map((task, index) => (_jsxs("li", { className: `flex justify-between items-center p-2 mb-2 border rounded ${task.completed ? "line-through text-gray-400" : ""}`, children: [_jsx("span", { onClick: () => toggleTask(index), className: "cursor-pointer flex-grow", children: task.text }), _jsx("button", { onClick: () => removeTask(index), className: "ml-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600", children: "\u2715" })] }, index))) })] }));
}
