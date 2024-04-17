import { useState } from 'react';
import imageData from './assets/react-core-concepts.png'
import CoreConcepts from './components/corecomcepts/CoreConcepts';
import Header from './components/Header/Header';
import TabButton from './components/TabButton/TabButton';
import { EXAMPLES  } from './data';

const coreConceptsList = [
  {
    image: imageData,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: imageData,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: imageData,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: imageData,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
  // {
  //   "image": imageData,
  //   "title": "Fundamental React concepts",
  //   "description": "Fundamental React concepts you will need for almost any app you are going to build!",
  // },
  // {
  //   "image": imageData,
  //   "title": "Fundamental React concepts",
  //   "description": "Fundamental React concepts you will need for almost any app you are going to build!",
  // },
  // {
  //   "image": imageData,
  //   "title": "Fundamental React concepts",
  //   "description": "Fundamental React concepts you will need for almost any app you are going to build!",
  // },
  // {
  //   "image": imageData,
  //   "title": "Fundamental React concepts",
  //   "description": "Fundamental React concepts you will need for almost any app you are going to build!",
  // },
]


function App() {
  const cores = coreConceptsList.map((item) => <CoreConcepts title={item.title} image={item.image} description={item.description} />);

  const [ selectedText, setSelectedState ]  = useState("jsx")
  // console.log(cores)
  const onSelect = (value) => {
    // alert(value);
    setSelectedState(value);
  }

  console.log("Running from Parent")

  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started Carrington!</h2>
          <ul>
            { cores }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples!</h2>
          <menu>
            <TabButton title="JSX" onSelect={ () =>  onSelect("jsx") } />
            <TabButton title="State" onSelect={  () => onSelect("state") } />
            <TabButton title="Props" onSelect={ () =>  onSelect("props") } />
            <TabButton title="Components" onSelect={  () => onSelect("components") } />
          </menu>

          <div id="tab-content">
            <h3>{ EXAMPLES[selectedText].title  }</h3>
            <p>{ EXAMPLES[selectedText].description  }</p>
            <pre>
              <code>
                { EXAMPLES[selectedText].code  }
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
