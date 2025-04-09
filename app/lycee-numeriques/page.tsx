'use client';

import { useState } from 'react'
import './lycee-numeriques.module.css'

export default function Home() {
  const [search, setSearch] = useState('')

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Bienvenue sur le portail d'informations des Lycées numériques en France</h1>
        
        <input
          type="text"
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <ul className="space-y-2">
        </ul>
      </div>
    </div>
  )
}
