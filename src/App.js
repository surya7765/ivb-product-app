import './App.css';
import Home from './components/home/Home';
import CollapsibleNavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BuyNow from './services/buy_now/BuyNow';
import AddToCart from './services/add_to_cart/AddToCart';

function App() {
  return (
    <div className="App">
      <Router>
        <CollapsibleNavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* Dynamic URL */}
          <Route path='/buy_now/:id' element={<BuyNow/>}/>
          <Route path='/cart'element={<AddToCart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;