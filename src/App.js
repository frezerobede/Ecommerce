import React from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux';



const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/success" element={<Success/>}/>
        <Route exact path="/login" element={user ? <Navigate to="/"/> :<Login/>}/>
        <Route exact path="/products/:category" element={<ProductList/>}/>
        <Route exact path="/product/:id" element={<Product/>}/>
        <Route exact path="/register" element={user ? <Navigate to="/"/> :<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;

