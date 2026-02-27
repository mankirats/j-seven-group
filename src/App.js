import Header from "./components/Header";
import "./index.css";
import logo from "./media/logo no.png";
// import { useState } from "react";
import "animate.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quote from "./components/Quote";
import ContactPage from "./components/ContactPage";
import ServicesPage from "./components/ServicesPage";
function App() {
    return (
        <>
            <Header
                logo={logo}
                navItems={["Home", "About", "Services", "Blog", "Contact"]}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/getQuote" element={<Quote />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
            </Routes>
        </>
    );
}

export default App;
