import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (

    <span className="buttons">
        {!!tasks.length && (
            <>
                <button onClick={toggleHideDone} className="buttons__button">{hideDone ? "Pokaż" : "Ukryj"} ukończone</button>
                <button className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}>Ukończ wszystkie</button>
            </>
        )}
    </span>
);

export default Buttons;