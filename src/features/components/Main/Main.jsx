import React from 'react';
import SectionImage from './SectionImage';
import SectionIcons from './SectionIcons';
import SectionText from './SectionText';
import SectionList from './SectionList';
import SectionButton from './SectionButton';
import './styles.scss';

function Main() {
    return (
        <main className="main">
            <SectionImage />
            <SectionIcons />
            <SectionText />
            <SectionList />
            <SectionButton />
        </main>
    )
}

export default Main;