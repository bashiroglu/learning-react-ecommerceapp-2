import React from 'react';
import HomePage from './pages/homepage/Homepage';
import './App.css';
/* we get it from react-router-dom*/
import { Switch, Route } from 'react-router-dom';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div className="App">
      {/* this is how we use route, swtich help us to render only one comp per req */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
