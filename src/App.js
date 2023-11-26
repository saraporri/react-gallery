import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchEngine defaultKeyword="dog" />
      </header>
    </div>
  );
}

export default App;
