import './App.css';
import Home from './components/home/Home';
import CollapsibleNavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <CollapsibleNavBar />
      <Home />
    </div>
  );
}

export default App;