import React from 'react';

import './App.css';
import ClickCounterTwo from './components/clickCounterTwo';
import ClickCounter from './components/ClickCounter';
//import ClickCounterTwo from './components/clickCounterTwo';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Message from './components/message'
//  import Counter from './components/counter'
import Hover from './components/Hover'
import HoverTwo from "./components/hoverTwo";
import WithCounterTwo from './components/withCounterTwo';
// import Greeting from './components/destructure'
// import FunctionClick from './components/functionClick'
// import EventBind from './components/EventBind'
// import NameList from './components/NameList'
// import ParentComponent from './components/ParentComponent'
// import Stylesheet from './components/stylesheet'
// import './appStyle.css'
// import styles from './appStyle.module.css'


//import Form from './components/form'

//import LifeCycleA from './components/lifeCycleA'

//import FragmentDemo from './components/fragmentDemo'
// import ParentComp from './components/ParentComp'
// import RefsDemo from './components/RefsDemo';
// import PortalDemo from './components/PortalDemo'
// import Hero from './components/Hero'
// import Error from './components/Error'


function App() {
  return (
    <div className="App">
      {/* <h1 className="error"> Error</h1>
      <h1 className={styles.success}>Success</h1>
    <NameList></NameList>
    <Stylesheet></Stylesheet> */}
      {/* <NameList></NameList> */}
      {/* <Form></Form> */}

      {/* <LifeCycleA> </LifeCycleA> */}

      {/* <FragmentDemo/> */}

      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <PortalDemo /> */}

      {/* <Hero heroName="Batman" />
      <Hero heroName="superman" />
      <Error>
        <Hero heroName="Joker" />
      </Error> */}
      {/* <Counter/> */}
      {/* <ClickCounterTwo/>
      <HoverTwo/> */}

      {/* <WithCounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <WithCounterTwo
        render={(count, incrementCount) => (
          <HoverTwo count={count} incrementCount={incrementCount} />
        )}
      /> */}

      <ClickCounter/>
      <Hover/>
    </div>
  );
}

export default App;
