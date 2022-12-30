import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 20px 20px 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    align-items: center;

    @media (max-width: 767px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    max-width: 820px;
    height: 35px;
    padding: 20px;
`;

export const StyledButton = styled.button`
    background-color: teal;
    color: white;
    padding: 15px;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.08);
    }

    @media (max-width: 767px) {
        width: 100%;
        
        &:hover {
            transform: scale(1.03);
        }
    }
`;