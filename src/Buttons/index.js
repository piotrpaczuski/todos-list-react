import { StyledSpan, StyledButton } from "./styled"

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

    <StyledSpan>
        {!!tasks.length && (
            <>
                <StyledButton onClick={toggleHideDone}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </StyledButton>
                <StyledButton
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}>
                        Ukończ wszystkie
                </StyledButton>
            </>
        )}
    </StyledSpan>
);

export default Buttons; 