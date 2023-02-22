import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "./components/pages/Home";
import PhysicalEvent from "./components/pages/PhysicalEvent";
import EventDetails from "./components/pages/EventDetails";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import NoPage from "./components/pages/NoPage";
import Login from "./components/pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/events" element={<PhysicalEvent />} />
        <Route exact path="/events/:eventId" element={<EventDetails />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="*" element={<NoPage />} />
      </Routes>
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
