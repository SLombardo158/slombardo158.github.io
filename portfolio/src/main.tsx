import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Volunteering from "./pages/Volunteering";
import "./assets/css/index.css";
import "./assets/css/globals.css";
import "./assets/css/home.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/volunteer" element={<Volunteering />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


