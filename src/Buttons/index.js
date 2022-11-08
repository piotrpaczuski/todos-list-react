import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <span className="buttons-centred">
        {!!tasks.length && (
            <>
                <button className="buttons">{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
                <button className="buttons"
                    disabled={tasks.every(({ done }) => done)}>Ukończ wszystkie</button>
            </>
        )}
    </span>
);

export default Buttons;