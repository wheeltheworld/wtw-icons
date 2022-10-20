import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import AdvancedUsage from './sections/AdvancedUsage';
import AvailableIcons from './sections/AvailableIcons';
import GetStarted from './sections/GetStarted';
import Social from './sections/Social';

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
        <Fragment>
            <ResetCss />
            <GetStarted />
            <AvailableIcons />
            <AdvancedUsage />
            <Social />
        </Fragment>
    );
};

export default App;
