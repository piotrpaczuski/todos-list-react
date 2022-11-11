import "./style.css";

const Tasks = ({tasks, hideDone, removeTasks}) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id}
                className={`tasks__listItem${task.done && hideDone ? " tasks__listItem-hidden" : ""}`}>
                <button className="tasks__buttonAdd">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "tasks__done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__buttonRemove" onClick={() => removeTasks(task.id)}>🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;