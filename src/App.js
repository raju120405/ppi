import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
