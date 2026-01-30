import { useState } from 'react'

export default function Projet() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('numerique');

    const openModal = (tab) => {
        setActiveTab(tab);
        setIsModalOpen(true);
    };

    return (
        <section className="max-w-6xl mx-auto px-6 py-10">
            <h2 className="text-4xl text-center font-bold mb-12 text-gray-900">
                Le projet
            </h2>
            <div className="grid grid-cols-1 lg:mb-16 mb-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl text-center font-semibold mb-4">Contexte</h3>
                    <p className="text-gray-600 text-lg">
                        <span className="text-blue-600">Et si la langue n'était plus une barrière, mais une opportunité ?</span><br/>
                        Dans un pays où 40 % des habitants ne parlent qu'une seule langue, la communication reste un enjeu majeur.
                        Nous avons décidé d'y répondre en consacrant notre quatrième année d'étude à cette problématique essentielle.
                    </p>
                </div>
            </div>

            <div className="grid sm:text-sm grid-cols-3 gap-8">
                <button onClick={() => openModal('numerique')} className="mb-8 inline-block rounded-lg">
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                        <h3 className="text-lg text-center font-semibold mb-4"> 📵 Inclusion numérique</h3>
                        <p className="text-gray-600">
                            Le but de notre solution est d'être utilisable sans équipement personnel ni compétences techniques.
                        </p>
                    </div>
                </button>
                <button onClick={() => openModal('langue')} className="mb-8 inline-block rounded-lg">
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                        <h3 className="text-lg text-center font-semibold mb-4"> 🌍 Barrière de la langue</h3>
                        <p className="text-gray-600">
                            Faciliter les échanges avec les publics allophones dans les structures
                            d'accueil.
                        </p>
                    </div>
                </button>
                <button onClick={() => openModal('handicap')} className="mb-8 inline-block rounded-lg">
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                        <h3 className="text-lg text-center font-semibold mb-4"> ♿ Handicap</h3>
                        <p className="text-gray-600">
                            Proposer des modes de communication adaptés aux handicaps de communication.
                        </p>
                    </div>
                </button>
            </div>

            {/* MODALE */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-gray-50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-sm"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="bg-white p-6 rounded-t-2xl border-b border-gray-200 relative">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 className="text-2xl font-bold text-gray-900">
                                {activeTab === 'numerique' && '📵 Inclusion numérique'}
                                {activeTab === 'langue' && '🌍 Barrière de la langue'}
                                {activeTab === 'handicap' && '♿ Handicap'}
                            </h2>
                        </div>

                        {/* Onglets */}
                        <div className="bg-white border-b border-gray-200">
                            <div className="flex">
                                <button
                                    onClick={() => setActiveTab('numerique')}
                                    className={`px-6 py-4 font-semibold transition ${activeTab === 'numerique'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                >
                                    Numérique
                                </button>
                                <button
                                    onClick={() => setActiveTab('langue')}
                                    className={`px-6 py-4 font-semibold transition ${activeTab === 'langue'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                >
                                    Langue
                                </button>
                                <button
                                    onClick={() => setActiveTab('handicap')}
                                    className={`px-6 py-4 font-semibold transition ${activeTab === 'handicap'
                                            ? 'text-blue-600 border-b-2 border-blue-600'
                                            : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                >
                                    Handicap
                                </button>
                            </div>
                        </div>

                        {/* Contenu des onglets */}
                        <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
                            {activeTab === 'numerique' && (
                                <div>
                                    <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                                        <h3 className="text-xl font-semibold mb-4">Accès inégaux à la technologie</h3>
                                        <p className="text-gray-600">
                                            De plus en plus de personnes sont exclues des services en ligne faute
                                            d'accès à des appareils numériques personnels ou d'une maîtrise du numérique avérée. 
                                            Les solutions actuelles reposent souvent sur l'utilisation de smartphones ou tablettes personnels, pour les traducteurs en ligne par exemple
                                            Notre solution vise à être accessible à tous, indépendamment de leur équipement ou de leurs compétences techniques.
                                            Il y a aussi des zones en France où l'accès à Internet est limité, ce qui complique davantage la communication et la manipulation d'outils technologiques.
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                                        <h3 className="text-xl font-semibold mb-4">Alternatives existantes</h3>
                                        <p className="text-gray-600">
                                           Il n'y a pas de solution unique pour résoudre les problèmes d'inclusion numérique. 
                                           Pour les mauvaises couvertures réseau, certaines structures mettent à disposition un wifi public, mais la sécurité et la fiabilité ne sont pas garanties.<br/>
                                           Notre solution permet de proposer une alternative efficace et inclusive, spécialement conçue pour les structures d'accueil.

                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'langue' && (
                                <div>
                                    <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                                        <h3 className="text-xl font-semibold mb-4">Section 1</h3>
                                        <p className="text-gray-600">
                                            Contenu sur la barrière de la langue...
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'handicap' && (
                                <div>
                                    <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
                                        <h3 className="text-xl font-semibold mb-4">Section 1</h3>
                                        <p className="text-gray-600">
                                            Contenu sur le handicap...
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}