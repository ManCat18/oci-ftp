import { useState } from 'react'

export default function Contact() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <p className="text-gray-700 mb-8">
                Pour en savoir plus sur le projet ou accéder au rapport complet.
            </p>
            <div className="bg-white p-6 rounded-xl shadow">
                <p>Email : <span className="font-medium">contact@projet-inclusif.fr</span></p>
            </div>
        </section>
    );
}