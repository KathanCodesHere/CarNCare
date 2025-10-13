import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Cars from "./pages/Cars";
import AboutSec from "./Components/AboutSec";
import Layout from "./Components/Layout";
import Profile from "./pages/Profile";
import CarDetails from "./pages/CarDetails";
function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Wrap all pages inside the Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cars" element={<Cars />} />
            <Route path="about" element={<AboutSec />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/car/:id" element={<CarDetails />} />

          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
