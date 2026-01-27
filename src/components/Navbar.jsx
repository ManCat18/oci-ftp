import { useState } from 'react'

import { NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClass = ({ isActive }) =>
        `transition ${isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-600 hover:text-blue-600"
        }`;

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Nom */}
                <NavLink
                    to="/"
                    className="text-xl font-bold text-gray-900 tracking-tight"
                >
                    <span className="text-blue-700">O</span><span className="text-blue-500">C</span><span className="text-blue-300">I</span>
                </NavLink>

                {/* Liens */}
                <nav className="flex gap-8 text-sm">
                    <NavLink to="/" className={linkClass}>
                        Accueil
                    </NavLink>
                    <NavLink to="/projet" className={linkClass}>
                        Le projet
                    </NavLink>
                    <NavLink to="/equipe" className={linkClass}>
                        Équipe
                    </NavLink>
                    <NavLink to="/contact" className={linkClass}>
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
