import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <span className="buttons">
        {!!tasks.length && (
            <>
                <button className="buttons__button" onClick={toggleHideDone}>{hideDone ? "Pokaż" : "Ukryj"} ukończone</button>
                <button className="buttons__button"
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}>Ukończ wszystkie</button>
            </>
        )}
    </span>
);

export default Buttons;