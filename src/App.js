import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WEATHER</h1>

        <Weather city="Paris" />
        <Weather city="Rio de Janeiro" />
      </header>
    </div>
  );
}

export default App;
