import Header from "./components/header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton>{CORE_CONCEPTS[0].title}</TabButton>
            <TabButton>{CORE_CONCEPTS[1].title}</TabButton>
            <TabButton>{CORE_CONCEPTS[2].title}</TabButton>
            <TabButton>{CORE_CONCEPTS[3].title}</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
