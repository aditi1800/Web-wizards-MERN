import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import PhysicalEvent from "./components/pages/PhysicalEvent";
import VirtualEvent from "./components/pages/VirtualEvent";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import NoPage from "./components/pages/NoPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/physicalEvent" element={<PhysicalEvent />} />
          <Route exact path="/virtualEvent" element={<VirtualEvent />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
