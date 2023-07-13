import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import QuickView from "./pages/QuickView";
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";
import UpdateAddress from "./pages/UpdateAddress";
import UpdateProfile from "./pages/UpdateProfile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quick-view" element={<QuickView />} />
        <Route path="/search" element={<Search />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/update_address" element={<UpdateAddress />} />
        <Route path="/update_profile" element={<UpdateProfile />} />
      </Routes>
    </>
  );
}

export default App;
