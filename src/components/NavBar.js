'use client'

import { useAuthStore } from '@/app/store/useAuthStore'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function NavBar() {
  const { user } = useAuthStore()
   const router = useRouter()
  const [showDropdown, setShowDropdown] = useState(false)

  const handleLogout = () => {
    logout()
    router.push('/')
  }

    return (
    <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="/" className="text-xl font-bold text-purple-600 hover:underline">
            🏠 Sunupalace
          </a>
          <select className="text-sm text-gray-500 border-none bg-transparent focus:outline-none">
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </div>

        <div className="flex-1 mx-4 max-w-xl">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="flex items-center gap-4 text-sm relative">
          <a href="#" className="text-green-600 font-semibold">Acheter</a>
          <a href="#" className="text-gray-700">Vendre</a>
          <a href="#" className="text-gray-700">Louer</a>
          <a href="#" className="text-gray-700">Contact</a>

          <select className="text-sm text-gray-500 border-none bg-transparent focus:outline-none">
            <option value="usd">CFA</option>
            <option value="eur">EUR</option>
          </select>

          {!user ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-purple-900 text-white px-5 py-2 rounded-full"
              >
                Connexion
                 <span className="text-sm">{showDropdown ? '▲' : '▼'}</span>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
                  <a href="/login" className="block px-4 py-2 hover:bg-gray-100">Se connecter</a>
                  <a href="/register" className="block px-4 py-2 hover:bg-gray-100">S'inscrire</a>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full"
            >
              Déconnexion
            </button>
          )}
        </div>
        </div>

    <nav className="bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-4 py-2 flex items-center gap-6 overflow-x-auto">
        <button className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            <span>📂</span> Toutes les catégories
        </button>
        <button className="text-gray-600 hover:text-purple-600 flex items-center gap-2">🏠 Maison</button>
        <button className="text-gray-600 hover:text-purple-600 flex items-center gap-2">🏨 Hôtel</button>
        <button className="text-purple-600 font-medium border-b-2 border-purple-600 flex items-center gap-2">🏘️ Villa</button>
        <button className="text-gray-600 hover:text-purple-600 flex items-center gap-2">🏢 Appartement</button>
        <button className="text-gray-600 hover:text-purple-600 flex items-center gap-2">⛺ Maison de campagne</button>
        
        <div className="ml-auto flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></span>
            <span className="text-sm text-gray-700">Senegal</span>
            <span className="text-xs text-gray-400">Dakar</span>
        </div>
        </div>
    </nav>
    </header>
    )
}