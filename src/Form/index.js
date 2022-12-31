import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskConten, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskConten.trim()) {
            addNewTask(newTaskConten.trim());
            setNewTaskContent("");
        }

        inputRef.current.focus();
        return setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                ref={inputRef}
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