import './App.css';
import Header from './comps/Header/Header'
import TinderCards from './comps/TinderCards/TinderCards'

function App() {
  return (
    // BEM class naming convention
    <div className="App">
      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      <TinderCards />
      {/* Swipe Buttons */}

    </div>
  );
}

export default App;
