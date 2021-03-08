import styled from 'styled-components';

export const Heading1 = styled.h1<{ color?: string; align?: string }>`
    color: ${(props) => props.color || 'white'};
    text-align: ${(props) => props.align || 'left'};
`;

export const Heading2 = styled.h2<{ color?: string; align?: string }>`
    color: ${(props) => props.color || 'white'};
    text-align: ${(props) => props.align || 'left'};
`;

export const Heading3 = styled.h3<{ color?: string; align?: string }>`
    color: ${(props) => props.color || 'white'};
    text-align: ${(props) => props.align || 'left'};
`;
