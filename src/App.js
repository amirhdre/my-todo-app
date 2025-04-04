import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    return (_jsxs("div", { className: "container py-5", children: [_jsxs("div", { className: "text-center mb-4", children: [_jsx("img", { src: "https://www.gene.com/assets/frontend/img/social.png", alt: "Genentech Logo", className: "img-fluid", style: { maxHeight: "60px" } }), _jsx("h1", { className: "mt-3", children: "\uD83D\uDCDD To-Do List" }), _jsx("p", { className: "text-muted", children: "This app is made to demonstrate my skills in React JS." })] }), _jsxs("div", { className: "input-group mb-3", children: [_jsx("input", { type: "text", className: "form-control", placeholder: "Add a new task...", value: input, onChange: handleInputChange }), _jsx("button", { className: "btn btn-primary", onClick: addTask, children: "Add" })] }), _jsx("ul", { className: "list-group", children: tasks.map((task, index) => (_jsxs("li", { className: `list-group-item d-flex justify-content-between align-items-center ${task.completed ? "text-decoration-line-through text-muted" : ""}`, children: [_jsx("span", { onClick: () => toggleTask(index), style: { cursor: "pointer", flexGrow: 1 }, children: task.text }), _jsx("button", { className: "btn btn-sm btn-danger ms-2", onClick: () => removeTask(index), children: "\u2715" })] }, index))) })] }));
}
