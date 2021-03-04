import React from 'react';
import styled from 'styled-components';

const Section = styled.article`
    padding: 50px 100px;
`;

const Li = styled.li`
    list-style: none;
    margin: 10px 0;
`;

const Code = styled.code`
    background-color: #141414;
    border-radius: 5px;
    color: white;
    padding: 5px;
`;

const Title = styled.h1`
    text-align: center;
`;

interface GetStartedProps {}

const GetStarted: React.FC<GetStartedProps> = ({}) => {
    return (
        <Section>
            <Title>Wheel the World Icons</Title>
            <h2>How to get started?</h2>
            <ul>
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
            </ul>
        </Section>
    );
};

export default GetStarted;
