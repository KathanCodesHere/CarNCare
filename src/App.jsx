import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Cars from "./pages/Cars";
import AboutSec from "./Components/AboutSec";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar stays at top */}
        <Navbar/>

        {/* Page content changes here */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/about" element={<AboutSec/>} />
          </Routes>
        </main>

        {/* Footer stays at bottom */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
