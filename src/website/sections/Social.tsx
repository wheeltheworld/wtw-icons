import React from 'react';
import styled from 'styled-components';
import Section from '../components/atoms/Section';

interface SocialProps {}

const A = styled.a`
    color: black;
    margin-right: 20px;
    color: white;
`;

const Social: React.FC<SocialProps> = ({}) => {
    return (
        <Section isBlack direction="row">
            <A href="https://github.com/wheeltheworld/wtw-icons">Github</A>
            <A href="https://www.npmjs.com/package/wtw-icons">NPM</A>
            <A href="https://gowheeltheworld.com/">Wheel the World</A>
        </Section>
    );
};

export default Social;
