import React from 'react';
import { IconTag, WTWIcon } from '../../../react';
import styled from 'styled-components';

interface ShowIconProps {
    icon: IconTag;
}

const Item = styled.div`
    border: 1px solid gray;
    width: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
    margin: 10px 0;
    border-radius: 10px;
`;

const Pre = styled.pre`
    margin-top: 10px;
`;

const ShowIcon: React.FC<ShowIconProps> = ({ icon }) => {
    return (
        <Item>
            <WTWIcon icon={icon} />
            <Pre>{icon}</Pre>
        </Item>
    );
};

export default ShowIcon;
