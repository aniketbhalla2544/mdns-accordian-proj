
import { Tab } from "./components/accordion";

function App() {
  return (
    <div className='app__body'>
      
      <Tab.Group>
        <Tab.List>
          <Tab>
            recent
          </Tab>
          <Tab>
            popular
          </Tab>
          <Tab>
            trending
          </Tab>
        </Tab.List>
        <Tab.Panels>
          
        </Tab.Panels>
      </Tab.Group>
    
    </div>
  );
}

export default App;
