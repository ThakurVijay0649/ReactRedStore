import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home'
import Product from './Components/Product'
import Details from './Components/Details'
import Contact from './Components/Contact'
import Account from "./Components/Account";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer/Footer";


const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
