import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

function App() {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

    const [filter, setFilter] = useState("All");

    const addTask = (text) => {
        const newTask = { id: crypto.randomUUID(), text, status: "Todo" };
        setTasks([newTask, ...tasks]);
    };

    const updateStatus = (id, newStatus) => {
        setTasks(tasks.map(t => t.id === id ? {...t, status: newStatus} : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    const filteredTasks = tasks.filter(task =>
        filter === "All" ? true : task.status === filter
    );

    return (
        <div>
            <h1>Task Manager</h1>
            <AddTaskForm onAdd={addTask} />
            <FilterBar current={filter} onChange={setFilter} />
            <TaskList
                tasks={filteredTasks}
                onUpdateStatus={updateStatus}
                onDelete={deleteTask}
            />
        </div>
    )
}

export default App;