import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import InfoProduct from './screens/InfoProduct';
import Layout from './components/Layout';
import Products from './components/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/product/:Id" element={<InfoProduct />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);