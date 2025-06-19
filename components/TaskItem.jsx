function TaskItem({ task, onUpdateStatus, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "8px 0", padding: "8px" }}>
      <p><strong>{task.text}</strong> — <em>{task.status}</em></p>

      <div>
        {task.status !== "Done" && (
          <button onClick={() => onUpdateStatus(task.id, "Done")}>
            Mark Done
          </button>
        )}

        {task.status === "Todo" && (
          <button onClick={() => onUpdateStatus(task.id, "In Progress")}>
            Start
          </button>
        )}

        {task.status === "In Progress" && (
          <button onClick={() => onUpdateStatus(task.id, "Todo")}>
            Move to Todo
          </button>
        )}

        <button onClick={() => onDelete(task.id)} style={{ marginLeft: "8px" }}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
