import React from 'react';
import { Suspense, useEffect, useMemo, useState } from 'react'
import './LyceeList.module.css'


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
    adresse: string;
    cp: number;
  }


const Lyceelist = ({ searchTerm } : { searchTerm: string }) => {

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
          adresse: item.adresse,
          cp: item.CP,
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
  return (
    <div className="flex justify-center items-center h-40">
      <div className="w-12 h-12 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
    </div>
  );
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
            <p className="text-sm text-gray-500"><strong>Adresse :</strong> {monlycee.adresse}</p>
            <p className="text-sm text-gray-500"><strong>Code postal :</strong> {monlycee.cp}</p>
            <p className="text-sm text-gray-500"><strong>Numero de téléphone :</strong> {monlycee.telephone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lyceelist;
