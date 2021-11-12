
import { Tab } from "./components/accordion";

function App() {

  return (
    <div className='app__body'>

      {/* first accordion */}
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
          <Tab>
            declining
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <h1 className='fs-3'>Panel 1</h1>
            <p>First panel</p>
          </Tab.Panel>
          <Tab.Panel>
            <h1 className='fs-3'>Panel 2</h1>
            <p>Second panel</p>
          </Tab.Panel>
          <Tab.Panel>
            <h1 className='fs-3'>Panel 3</h1>
            <p>Third panel</p>
          </Tab.Panel>
          <Tab.Panel>
            <h1 className='fs-3'>Panel 4</h1>
            <p>Third panel</p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      
      {/* second accordion */}
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
          <Tab.Panel>
            <h1 className='fs-3'>Panel 1</h1>
            <p>First panel</p>
          </Tab.Panel>
          <Tab.Panel>
            <h1 className='fs-3'>Panel 2</h1>
            <p>Second panel</p>
          </Tab.Panel>
          <Tab.Panel>
            <h1 className='fs-3'>Panel 3</h1>
            <p>Third panel</p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    
    </div>
  );
}

export default App;
