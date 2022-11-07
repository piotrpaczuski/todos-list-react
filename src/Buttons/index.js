import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (

    <span className="section__buttons-centred">
        {!!tasks.length && (
            <>
                <button className="section__buttons">{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
                <button className="section__buttons"
                    disabled={tasks.every(({ done }) => done)}>Ukończ wszystkie</button>
            </>
        )}
    </span>
);

export default Buttons;