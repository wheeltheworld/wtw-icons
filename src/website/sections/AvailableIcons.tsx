import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import ShowIcon from '../components/ShowIcon';
import { search } from '../funcs/search';

const Section = styled.article`
    background-color: #141414;
    min-height: 400px;
    padding: 50px 100px;
`;

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

const Heading = styled.h2`
    color: white;
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
        <Section>
            <Header>
                <Heading>Available Icons</Heading>
                <Search type="text" onChange={handleChange} placeholder="Search Icon..." />
            </Header>
            <IconList>
                {list.length ? list.map((icon) => <ShowIcon icon={icon} />) : <Heading>Not Found</Heading>}
            </IconList>
        </Section>
    );
};

export default AvailableIcons;
