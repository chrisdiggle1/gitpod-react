import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
// import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <StatefulGreeting greeting="Im a stateful class component!" /> */}
      <SearchBar />
    </div>
  );
}

export default App;
