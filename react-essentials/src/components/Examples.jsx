import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";

export default function Examples() {
    console.log('Examples component executing');
    const [selectedTab, setSelectedTab] = useState();

    function handleSelect(selectedTab) {
        setSelectedTab(selectedTab);
    }

    let tabContent = <p>Please select a tab.</p>;

    if (selectedTab) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p>{EXAMPLES[selectedTab].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTab].code}</code>
                </pre>
            </div>
        );
    }
    return (<Section id="examples" title="Examples">
        <menu>
            <TabButton className={selectedTab === 'components' ? 'active' : undefined} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton className={selectedTab === 'jsx'  ? 'active' : undefined} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton className={selectedTab === 'props'  ? 'active' : undefined} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton className={selectedTab === 'state'  ? 'active' : undefined} onClick={() => handleSelect('state')}>State</TabButton>
        </menu>
        {tabContent}
    </Section>)
}