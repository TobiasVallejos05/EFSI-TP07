import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './screens/Home';
import About from './screens/About';
import Products from './components/Products';
import ProductsList from './screens/ProductsList';
import InfoProduct from './screens/InfoProduct';
import Contact from './screens/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/purchasedProducts" element={<ProductsList />}></Route>
        <Route path="/product/:Id" element={<InfoProduct />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);