import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    background-color: white;
    margin-bottom: 30px;
`;

export const StyledSectionHeader = styled.div`
    padding: 10px 20px;
    border-bottom: 2px solid lightgray;

    ${({tasksList}) => tasksList && css`
        display: grid;
        grid-template-columns: 1fr auto;

        @media (max-width: 767px) {
            display: grid;
            grid-template-rows: 1fr auto auto;
            grid-template-columns: auto;
        }
    `}
`;