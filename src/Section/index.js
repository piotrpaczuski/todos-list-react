import { StyledSection, StyledSectionHeader } from "./styled";

const Section = ({title, extraContent, body}) => (
    <StyledSection>
        <StyledSectionHeader tasksList>
            <h2>{title}</h2>
            {extraContent}
        </StyledSectionHeader>
        {body}
    </StyledSection>
);

export default Section;