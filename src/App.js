
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu';
 import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Navbar from './components/Navbar';
import Connect from './pages/Connect';
import About from './pages/About';
function App() {
  return (
      <Router>
       <Navbar /> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/about" element={<About/>} />
        
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
  );
}

export default App;