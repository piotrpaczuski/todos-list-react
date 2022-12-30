import { StyledList, StyledListItem, StyledSpan, StyledButtonAdd, StyledButtonRemove } from "./styled";

const Tasks = ({ tasks, hideDone, removeTasks, toggleTaskDone }) => (
    <StyledList>
        {tasks.map(task => (
            <StyledListItem 
                key={task.id}
                hidden={task.done && hideDone}
                >
                <StyledButtonAdd onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✔" : ""}
                </StyledButtonAdd>
                <StyledSpan done={task.done}>
                    {task.content}
                </StyledSpan>
                <StyledButtonRemove onClick={() => removeTasks(task.id)}>
                    🗑
                </StyledButtonRemove>
            </StyledListItem>
        ))}
    </StyledList>
);

export default Tasks;