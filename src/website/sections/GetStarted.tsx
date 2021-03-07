import React from 'react';
import styled from 'styled-components';
import Code from '../components/atoms/Code';
import { Heading1 } from '../components/atoms/Heading';
import { Li, Ul } from '../components/atoms/List';

const Section = styled.article`
    padding: 50px 100px;
`;

interface GetStartedProps {}

const GetStarted: React.FC<GetStartedProps> = ({}) => {
    return (
        <Section>
            <Heading1 align="center" color="#141414">
                Wheel the World Icons
            </Heading1>
            <h2>How to get started?</h2>
            <Ul>
                <Li>
                    Install the package with <Code>yarn add wtw-icons</Code> or <Code>npm i wtw-icons</Code>
                </Li>
                <Li>
                    Import the WTWIcon component in your project{' '}
                    <Code>
                        import {'{'} WTWIcon {'}'} from 'wtw-icons'
                    </Code>
                </Li>
                <Li>
                    Include it in your jsx and select your icon{' '}
                    <Code>
                        {'<'}WTWIcon icon='wtwlogo' {'/>'}
                    </Code>
                </Li>
            </Ul>
        </Section>
    );
};

export default GetStarted;
