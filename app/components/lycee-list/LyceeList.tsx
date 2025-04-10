import React, { useEffect, useMemo, useState } from 'react';
import './LyceeList.module.css';
import { useRouter } from 'next/navigation';

type RawLycee = {
    _id: string;
    nom: string;
    statut: string;
    OR_VILLE: string;
    département: string;
    téléphone: number;
    adresse: string;
    CP: number;
};

interface Lycee {
    _id: string;
    nom: string;
    statut: string;
    ville: string;
    departement: string;
    telephone: number;
    adresse: string;
    cp: number;
}

const Lyceelist = ({
    searchTerm,
    filterType,
}: {
    searchTerm: string;
    filterType: 'nom' | 'ville' | 'statut' | 'cp' | '';
  }) => {
    const [lyceeInfo, setLyceeInfo] = useState<Lycee[]>([]);
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:8000/donnees');
                const data = await res.json();

                const lycee = (data as RawLycee[]).map((item) => ({
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
            } catch (error) {
                console.error(
                    'Erreur lors de la récupération des données :',
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredLycee = useMemo(() => {
      if (!searchTerm.trim()) return lyceeInfo;
    
      if (filterType) {
        return lyceeInfo.filter((lycee) => {
          const value = lycee[filterType]?.toString().toLowerCase() || '';
          return value.includes(searchTerm.toLowerCase());
        });
      }
    
      return lyceeInfo.filter((lycee) =>
        ['nom', 'ville', 'statut', 'cp'].some((key) => {
          const value = lycee[key as keyof typeof lycee]?.toString().toLowerCase() || '';
          return value.includes(searchTerm.toLowerCase());
        })
      );
    }, [lyceeInfo, searchTerm, filterType]);
            
    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="w-12 h-12 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
            </div>
        );
    }

    if (filteredLycee.length === 0) {
      return (
        <div className="text-center text-gray-600 mt-10">
          <p className="text-2xl font-semibold mb-2">🙈 Oups ! Rien trouvé...</p>
          <p className="text-sm">
            Aucun lycée ne correspond à votre recherche.
            <br />
            🤔 Essayez avec un autre terme ou vérifiez l’orthographe.
          </p>
        </div>
      );
    }
    
    return (
        <div className="mx-auto bg-white p-6 rounded-2xl shadow-md mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {filteredLycee.map((monlycee) => (
                    <div
                        key={monlycee._id}
                        onClick={() => router.push(`/lycee/${monlycee._id}`)}
                        className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer"
                    >
                        <h2 className="text-xl font-semibold text-blue-800 mb-2">
                            {monlycee.nom}
                        </h2>
                        <div
                            className={`inline-block px-2 py-1 rounded-full text-white text-xs text-center items-center justify-center mb-4 ${
                                monlycee.statut.toLowerCase() === 'public'
                                    ? 'bg-green-500'
                                    : 'bg-red-500'
                            }`}
                        >
                            {monlycee.statut}
                        </div>
                        <p className="text-sm text-gray-500">
                            <strong>ID :</strong> {monlycee._id}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            <strong>Ville :</strong> {monlycee.ville}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            <strong>Département :</strong>{' '}
                            {monlycee.departement}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            <strong>Adresse :</strong> {monlycee.adresse}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            <strong>Code postal :</strong> {monlycee.cp}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            <strong>Numéro de téléphone :</strong>{' '}
                            {monlycee.telephone}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lyceelist;
