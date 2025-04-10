'use client';

import { Suspense, useEffect, useMemo, useState } from 'react'
import './lycee-numeriques.module.css'


interface Lycee {
    _id: string;
    nom: string;
    statut: string;
    ville: string;
    siret: string;
    academie: string;
    departement: string;
    uai: string;
    telephone: number;
  }
  
function LyceeList({ searchTerm } : { searchTerm: string }) {
  const [lyceeInfo, setLyceeInfo] = useState<Lycee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('http://localhost:8000/donnees');
        const data = await res.json();
    
        const lycee = data.map((item: any) => ({
          _id: item._id,
          nom: item.nom,
          statut: item.statut,
          ville: item.OR_VILLE,
          departement: item.département,
          telephone: item.téléphone,
        }));
    
        setLyceeInfo(lycee);
        setLoading(false);
      };
    
      fetchData();
    }, []);
    

  const filteredLycee = useMemo(() => {
    return lyceeInfo.filter(lycee =>
      lycee.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lycee.statut.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lycee._id.toLowerCase().includes(searchTerm) ||
      lycee.ville.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [lyceeInfo, searchTerm]);

  if (loading) {
    return <div className='mx-auto bg-white p-6 rounded-2xl shadow-md mt-5 text-3xl'>Loading Todos...</div>;
  }

  return (
    <div className='mx-auto bg-white p-6 rounded-2xl shadow-md mt-5'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {filteredLycee.map((monlycee) => (
          <div key={monlycee._id} className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{monlycee.nom}</h2>
            <div className={`inline-block px-2 py-1 rounded-full text-white text-xs text-center items-center justify-center mb-4 ${
                monlycee.statut.toLowerCase() === 'public' ? 'bg-green-500' : 'bg-red-500'
            }`}>
                {monlycee.statut}
            </div>
            <p className="text-sm text-gray-500"><strong>ID :</strong> {monlycee._id}</p>
            <p className="text-sm text-gray-500"><strong>Ville :</strong> {monlycee.ville}</p>
            <p className="text-sm text-gray-500"><strong>Département :</strong> {monlycee.departement}</p>
            <p className="text-sm text-gray-500"><strong>Numero de téléphone :</strong> {monlycee.telephone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState('')

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Bienvenue sur le portail d&apos;informations des Lycées numériques en France</h1>
        
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 pr-10 border rounded-xl focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
          </svg>
        </div>

        <ul className="space-y-2">
        </ul>
      </div>

      <Suspense>
        <LyceeList searchTerm={search} />
      </Suspense>

    </div>
  )
}
