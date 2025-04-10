'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type LyceeDetails = {
      [key: string]: string | number | null | undefined;
    };
    

export default function LyceeDetailsPage() {
    const { id } = useParams();
    const [lycee, setLycee] = useState<LyceeDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLycee = async () => {
            try {
                const res = await fetch(
                    `http://localhost:8000/donnees/by_id/${id}`
                );
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
    if (!lycee || lycee.error)
        return <p className="text-center mt-10">Lycée introuvable</p>;

    const formatKey = (key: string) => {
        let cleaned = key.replace(/_/g, ' ').trim().toLowerCase();

        cleaned = cleaned
            .replace('or ', '')
            .replace('geo.1', 'coordonnées secondaires')
            .replace('geo', 'coordonnées principales')
            .replace('cp', 'code postal')
            .replace('uai', 'UAI')
            .replace('dpt', 'département')
            .replace('n° siret', 'SIRET');

            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
        };
    return (
        <div className="max-w-3xl mx-auto bg-white p-6 mt-10 rounded-xl shadow-2xl border-blue-500">
            <h1 className="text-2xl font-bold mb-6 text-center text-blue-800 mb-">
                {lycee.nom || 'Détails du lycée'}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(lycee).map(([key, value]) => (
                    <div
                        key={key}
                        className="bg-blue-50 border border-blue-200 rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer"
                    >
                        <p className="text-sm text-gray-500">
                            {formatKey(key)}
                        </p>
                        <p className="font-semibold break-words">
                            {typeof value === 'object'
                                ? JSON.stringify(value)
                                : value?.toString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
