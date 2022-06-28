import { Routes, Route } from "react-router-dom";

import axios from "axios";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import ShoppingCart from "./pages/shoppingCart";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Perfil" element={<Profile />} />
        <Route path="/Compras" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
