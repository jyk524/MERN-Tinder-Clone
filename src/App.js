import './App.css';
import Header from './comps/Header/Header'
import TinderCards from './comps/TinderCards/TinderCards'
import SwipeButtons from './comps/SwipeButtons/SwipeButtons'

function App() {
  return (
    // BEM class naming convention
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
