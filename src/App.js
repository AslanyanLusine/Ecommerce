import './App.css';
import Nav from './components/Navbar/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategories from './pages/ShopCategories';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>

        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/men" element={<ShopCategories/>} categories="men"/>
          <Route path="/women" element={<ShopCategories/>} categories="women"/>
          <Route path="/kids" element={<ShopCategories/>} categories="kids"/>

          <Route path="/carts" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>

          <Route path="/product" element={<Product/>}>
              <Route path=":productID" element={<Product/>}/>   
          </Route>

        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
