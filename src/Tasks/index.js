import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`tasks__listItem${task.done && props.hideDone ? " tasks__listItem-hidden" : ""}`}>
                <button className="tasks__buttonAdd">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`${task.done ? "tasks__done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__buttonRemove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;