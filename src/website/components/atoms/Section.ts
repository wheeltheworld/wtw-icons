import styled from 'styled-components';

const Section = styled.article<{ isBlack?: boolean; direction?: 'column' | 'row' }>`
    display: flex;
    padding: 50px 100px;
    ${(props) => props.isBlack && `background-color: #141414;`}
    flex-direction: ${(props) => props.direction || 'column'};
`;

export default Section;
