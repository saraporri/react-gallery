import "./App.css";
import SearchEngine from "./SearchEngine";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchEngine />
      </header>
      <footer>
        This{" "}
        <a
          href="https://github.com/saraporri/react-gallery"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
        <span> website was coded by Sara Porricino</span>
      </footer>
    </div>
  );
}

export default App;
