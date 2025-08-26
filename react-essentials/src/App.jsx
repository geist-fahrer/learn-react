import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcept';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {
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

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              {...CORE_CONCEPTS[0]}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
