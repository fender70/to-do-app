import TaskItem from "./TaskItem";

function TaskList({ tasks, onUpdateStatus, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks to show.</p>;
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateStatus={onUpdateStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
