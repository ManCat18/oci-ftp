import { useState } from 'react'

export default function Equipe() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-10">L'équipe</h2>
            <div className="grid gap-8">
                <p>Nous sommes une équipe de deux étudiants dans le domaine informatique au sein de l'Universite de Bretagen Sud et de l'École nationale supérieure d'ingénieurs de Bretagne Sud à Vannes (56). <br />
                    Nous avons à coeur l'inclusion pour des raisons professionnelles, mais aussi car l'inclusion est une question sociétale de plus en plus répandue et son importance est capitale. <br />
                    Avides et curieux de nouvelles connaissances et compétences, c'est tout naturellement que nous avons réfléchit à ce projet et décidé de <span className="font-bold text-blue-600">nous plonger dedans à 100 % !</span></p>
                <h2 className="text-3xl font-bold mb-4">Meet the team</h2>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold">Manon</h3>
                    <p className="text-gray-600">Master Informatique · Gestion de projet · Créativité · Organisation</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold">Maxence</h3>
                    <p className="text-gray-600">Ingénieur Cybersécurité · Communication · Développement mobile ·Gestion de projet</p>
                </div>
            </div>
        </section>
    );
}