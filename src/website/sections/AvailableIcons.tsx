import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import ShowIcon from '../components/organisms/ShowIcon';
import Section from '../components/atoms/Section';
import { search } from '../funcs/search';
import { Heading2, Heading3 } from '../components/atoms/Heading';

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`;

const IconList = styled.section`
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px 0;
`;

const Search = styled.input`
    border-radius: 50px;
    outline: none;
    padding: 10px 20px;
    width: 200px;
`;

interface AvailableIconsProps {}

const AvailableIcons: React.FC<AvailableIconsProps> = ({}) => {
    const [list, setList] = useState(search());

    const handleChange = (e: ChangeEvent) => {
        const result = search((e.target as HTMLInputElement).value);
        setList(result);
    };

    return (
        <Section isBlack>
            <Header>
                <Heading2>Available Icons</Heading2>
                <Search type="text" onChange={handleChange} placeholder="Search Icon..." />
            </Header>
            <IconList>
                {list.length ? list.map((icon) => <ShowIcon icon={icon} key={icon} />) : <Heading3>Not Found</Heading3>}
            </IconList>
        </Section>
    );
};

export default AvailableIcons;
