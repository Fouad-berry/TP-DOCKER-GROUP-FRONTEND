'use client';

import { Suspense, useState } from 'react';
import Lyceelist from '../components/lycee-list/LyceeList';

export default function Home() {
    const [search, setSearch] = useState('');
    const [filterType, setFilterType] = useState<'nom' | 'ville' | 'statut' | 'cp' | ''>('nom');

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Bienvenue sur le portail d&apos;informations des Lycées
                    numériques en France
                </h1>

                <div className="relative mb-4">
                    <div className="flex items-center ml-4 mb-1">
                         {' '}
                        <label
                            htmlFor="filterType"
                            className="text-sm font-medium text-gray-700 mr-2"
                        >
                            Filtrer par :
                        </label>
                          {' '}
                          <select
                            id="filterType"
                            value={filterType}
                            onChange={(e) =>
                              setFilterType(
                                e.target.value === '' ? '' : (e.target.value as 'nom' | 'ville' | 'statut' | 'cp')
                              )
                            }
                            className="border px-3 py-1 rounded-lg text-sm cursor-pointer"
                          >
{/*                             <option value="">Aucun filtre</option>
 */}                            <option value="nom">Nom</option>
                            <option value="ville">Ville</option>
                            <option value="statut">Statut</option>
                            <option value="cp">Code postal</option>
                          </select>
                    </div>
                     {' '}
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 py-2 pr-10 border rounded-xl focus:outline-none"
                    />

                    {filterType && (
                      <div className="mt-2 flex items-center justify-start">
                        <div
                          className={`flex items-center px-3 py-1 rounded-full text-sm text-white mr-2 cursor-pointer ${
                            filterType === 'nom'
                              ? 'bg-orange-400'
                              : filterType === 'ville'
                              ? 'bg-blue-500'
                              : filterType === 'statut'
                              ? 'bg-green-500'
                              : 'bg-purple-500'
                          }`}
                        >
                          <div className='flex items-center justify-center'>
                          <span className="capitalize">Filtre : {filterType}</span>
                          <button
                            onClick={() => setFilterType('')}
                            className="text-white hover:text-gray-200 cursor-pointer" 
                            aria-label="Supprimer le filtre"
                          >
                            ×
                          </button>
                          </div>

                        </div>
                      </div>
                    )}

                </div>

                <ul className="space-y-2"></ul>
            </div>

            <Suspense>
                <Lyceelist searchTerm={search} filterType={filterType} />
            </Suspense>
        </div>
    );
}
