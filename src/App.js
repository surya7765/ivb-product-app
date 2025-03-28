import './App.css';
import Home from './components/home/Home';
import CollapsibleNavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BuyNow from './services/buy_now/BuyNow';

function App() {
  return (
    <div className="App">
      <Router>
        <CollapsibleNavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/buy_now' element={<BuyNow/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;