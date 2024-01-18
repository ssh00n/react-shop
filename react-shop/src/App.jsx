import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
// import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/products/:id" element={<ProductDetail />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
