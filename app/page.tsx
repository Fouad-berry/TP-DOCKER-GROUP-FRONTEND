'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="w-full md:w-1/2 p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Éducation Connectée : Découvrez les Lycées Numériques
                    </h1>
                    <p className="text-gray-600 mb-6">
                        670 lycées, 160.000 tablettes, 37.000 ordinateurs...
                        mais quel lycée a choisi quoi ? Explorez les choix
                        numériques des établissements d&apos;Île-de-France.
                    </p>
                    <button
                        onClick={() => router.push('/lycee-numeriques')}
                        className="bg-[#ff5722] text-white px-5 py-2 rounded-lg hover:bg-[#e64a19] transition buttonStart"
                    >
                        Commencer
                    </button>
                </div>

                <div className="w-full md:w-1/2">
                    <img
                        src="/lycee_numerique2.png"
                        alt="Lycée numérique"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Page;
