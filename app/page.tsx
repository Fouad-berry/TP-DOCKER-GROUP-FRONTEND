import React from 'react';

const page = () => {
  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden">
          
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenue sur notre site</h1>
            <p className="text-gray-600 mb-6">
              Découvrez les lycées numériques, leur offre de formation, les projets éducatifs et l’innovation au cœur de l’enseignement digital.
            </p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
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

export default page;