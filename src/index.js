import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import React from "react"
import ReactDom from "react-dom/client";
import ScrollToTop from "./components/ScrollTopTop";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter basename="/j-seven-group">
        <ScrollToTop />
        <App />
    </BrowserRouter>,
);
