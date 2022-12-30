import { useState } from "react";
// import "./style.css";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskConten, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskConten.trim()) {
            addNewTask(newTaskConten.trim());
            setNewTaskContent("");
        }

        return setNewTaskContent("");
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                value={newTaskConten}
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                required 
            />
            <StyledButton>Dodaj zadanie</StyledButton>
        </StyledForm>)
};

export default Form;