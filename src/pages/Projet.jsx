import { useState } from 'react'

export default function Projet() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">
                Le projet
            </h2>
            <div className="grid grid-cols-1 lg:mb-16 mb-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Le contexte</h3>
                    <p className="text-gray-600">
                        En France il y a actuellement <span className="text-blue-600">10 %</span> d'immigrés. Parmi ceux là, <span className="text-blue-600">29 %</span> n'ont aucune maitrise de la langue française.
                        La barrière de la langue est donc un des principaux problèmes qu'ils vont rencontrer. <br/>
                        Là où persiste cette barrière, l'incompréhension et l'exclusion prospèrent, laissant derrière elles seulement du négatif.
                        Il est donc capital d'y trouver une solution ! <br /> 
                        Nous en avons fait le centre de notre quatrième année d'étude !
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Inclusion numérique</h3>
                    <p className="text-gray-600">
                        Le but de notre solution est d'être utilisable sans équipement personnel ni compétences techniques.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Barrière de la langue</h3>
                    <p className="text-gray-600">
                        Faciliter les échanges avec les publics allophones dans les structures
                        d’accueil.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">Handicap</h3>
                    <p className="text-gray-600">
                        Proposer des modes de communication adaptés aux handicaps de communication.
                    </p>
                </div>
            </div>
        </section>
    );
}