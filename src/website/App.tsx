import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AvailableIcons from './sections/AvailableIcons';
import GetStarted from './sections/GetStarted';

interface AppProps {}

const ResetCss = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Lato, sans-serif
}
`;

const App: React.FC<AppProps> = ({}) => {
    return (
        <>
            <ResetCss />
            <GetStarted />
            <AvailableIcons />
        </>
    );
};

export default App;
