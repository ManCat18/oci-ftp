import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projet from "./pages/Projet";
import Equipe from "./pages/Equipe";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projet" element={<Projet />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500 flex justify-between">
            <span>© 2025 – Projet universitaire</span>
            <span>Manon & Maxence</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}
