import { useState } from 'react'

export default function Home() {
    return (
        <div className="bg-gray-50">
            {/* HERO */}
            <section className="max-w-6xl mx-auto px-6 py-8 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
                    Outil de communication <br className="hidden md:block" />
                    <span className="text-blue-600">inclusif</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                    Un projet innovant visant à améliorer l’accueil des personnes
                    allophones et en situation de handicap, grâce à une solution
                    inclusive, simple et pensée pour l’humain.
                </p>

                {/* <div className="flex justify-center gap-6">
                    <a
                        href="/projet"
                        className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
                    >
                        Découvrir le projet
                    </a>
                    <a
                        href="/equipe"
                        className="bg-white border border-gray-300 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition"
                    >
                        L’équipe
                    </a>
                </div> */}
            </section>

            {/* PROBLEMATIQUES */}
            <section className="bg-white py-24">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
                        Des obstacles encore <span className="text-blue-600">trop présents</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">
                                📵 Inégalités numériques
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Les solutions de communication existantes reposent souvent sur des équipements
                                personnels ou une maîtrise du numérique avérée.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">
                                🌍 Barrière de la langue
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Les publics allophones rencontrent de grandes difficultés à se
                                faire comprendre dans les structures d’accueil 
                                et aucune solution concrète ne répond au problème.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">
                                ♿ Handicap de communication
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Surdité, aphasie ou troubles cognitifs rendent les échanges
                                complexes et parfois impossibles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SOLUTION */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-gray-900">
                        Une solution pensée pour l’<span className="text-blue-600">accueil</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                        Notre projet propose un outil de communication inclusif, utilisable
                        sur tablette fournie par la structure, garantissant une
                        communication fiable, immédiate et respectueuse des données.
                    </p>

                    <a
                        href="/projet"
                        className="inline-block bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
                    >
                        En savoir plus
                    </a>
                </div>
            </section>
        </div> 
    );
}