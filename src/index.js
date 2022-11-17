import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './screens/Home';
import About from './screens/About';
import Products from './components/Products';
import InfoProduct from './screens/InfoProduct';
import Contact from './screens/Contact';
import Purchase from './screens/Purchase';
import { ContextProvider } from './contextState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product/:Id" element={<InfoProduct />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/purchase" element={<Purchase />}></Route>
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);