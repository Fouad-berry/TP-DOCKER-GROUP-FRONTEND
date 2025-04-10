'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function LyceeDetailsPage() {
  const { id } = useParams();
  const [lycee, setLycee] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLycee = async () => {
      try {
        const res = await fetch(`http://localhost:8000/donnees/by_id/${id}`);
        const data = await res.json();
        setLycee(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchLycee();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Chargement...</p>;
  if (!lycee || lycee.error) return <p className="text-center mt-10">Lycée introuvable</p>;

  const formatKey = (key: string) => {
    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .replace('Or ', '')
      .replace('Geo.1', 'Coordonnées secondaires')
      .replace('Geo', 'Coordonnées principales')
      .replace('Cp', 'Code Postal')
      .replace('Uai', 'UAI')
      .replace('Dpt', 'Département')
      .replace('N° Siret', 'SIRET');
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 mt-10 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">{lycee.nom || 'Détails du lycée'}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(lycee).map(([key, value]) => (
          <div key={key} className="bg-gray-50 p-3 rounded border">
            <p className="text-sm text-gray-500">{formatKey(key)}</p>
            <p className="font-semibold break-words">
              {typeof value === 'object' ? JSON.stringify(value) : value?.toString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
