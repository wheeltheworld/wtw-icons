import React from 'react';
import styled from 'styled-components';

interface SocialProps {}

const Container = styled.article`
    display: flex;
    padding: 50px 100px;
`;

const A = styled.a`
    color: black;
    margin-right: 20px;
`;

const Social: React.FC<SocialProps> = ({}) => {
    return (
        <Container>
            <A href="https://github.com/wheeltheworld/wtw-icons">Github</A>
            <A href="https://www.npmjs.com/package/wtw-icons">NPM</A>
            <A href="https://gowheeltheworld.com/">Wheel the World</A>
        </Container>
    );
};

export default Social;
