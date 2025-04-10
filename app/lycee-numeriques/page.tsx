'use client';

import { Suspense, useEffect, useMemo, useState } from 'react'
import './lycee-numeriques.module.css'


interface Todo{
  _id: string;
  nom: string;
  statut: string;
}

function LyceeList({ searchTerm } : { searchTerm: string }) {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8000/donnees');
      const data = await res.json();
      // const lycee = data.map((item: { [x: string]: any; nom: any; statut: any; }) => ({
      //   numSiret: item['n° SIRET'],
      //   nom: item.nom,
      //   statut: item.statut
      // }));
      setTodoList(data);
      setLoading(false);
    };

    fetchData();
  }, []);


  // Search Bar
  const filteredLycee = useMemo(() => {
    return todoList.filter(todo => 
      todo.nom.toLowerCase().includes(searchTerm.toLowerCase()) || 
      todo.statut.toLowerCase().includes(searchTerm.toLowerCase()) || 
      todo._id.toLowerCase().includes(searchTerm)
    )
  }, [todoList, searchTerm]);


  if (loading) {
    return <div className='mx-auto bg-white p-6 rounded-2xl shadow-md mt-5 text-3xl'>Loading Todos...</div>;
  }

  return (
    <div className='mx-auto bg-white p-6 rounded-2xl shadow-md mt-5'>
      <h1 className='text-3xl'>Todo List</h1>
      <ul>
        {/* {todoList.map((todoObj) => (
          <li key={todoObj._id}>Title: {todoObj.nom} - {todoObj.statut} - {todoObj._id}</li>
        ))} */}
        {filteredLycee.map((todoObj) => (
          <li key={todoObj._id}>Nom: {todoObj.nom} - {todoObj.statut} - id: {todoObj._id}</li>
        ))}
      </ul>
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
