import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskConten, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskConten.trim());
        setNewTaskContent("");
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskConten}
                className="form__input"
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                required />
            <button className="form__button">Dodaj zadanie</button>
        </form>)
};

export default Form;