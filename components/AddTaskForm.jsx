import { useState } from "react";

function AddTaskForm({ onAdd }) {
    const[text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;
        onAdd(text.trim());
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Enter new task"
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTaskForm