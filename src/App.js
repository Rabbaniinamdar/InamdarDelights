import React from "react";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Reservations from "./routes/Reservations";
import Login from "./routes/Login";
import About from "./routes/About";
import OrderOnline from "./routes/OrderOnline";
import Confirmation from './components/Confirmation'
import { Route, Routes } from "react-router-dom";
import Donate from "./routes/Donate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/confirmation" element={<Confirmation/>} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate/>} />

      </Routes>
    </>
  );
}

export default App;
