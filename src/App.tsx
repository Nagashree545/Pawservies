import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import AboutPage from "./Components/Aboutpage";
import ContactPage from "./Components/Contactpage";
import ServicesPage from "./Components/Servicepage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BookingForm from "./Components/Bookingform";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
