'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'client' })
  const router = useRouter()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost/gestion_hotel/backend/index.php?action=createUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      alert('Inscription réussie !')
      router.push('/login')
    } catch (err) {
      alert('Erreur pendant l\'inscription')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-purple-700">Créer un compte</h2>

        <div className="flex items-center border px-3 py-2 rounded-xl">
          <FaUser className="text-gray-400 mr-3" />
          <input
            type="text"
            name="name"
            placeholder="Nom complet"
            className="w-full focus:outline-none"
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center border px-3 py-2 rounded-xl">
          <FaEnvelope className="text-gray-400 mr-3" />
          <input
            type="email"
            name="email"
            placeholder="Adresse e-mail"
            className="w-full focus:outline-none"
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center border px-3 py-2 rounded-xl">
          <FaLock className="text-gray-400 mr-3" />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            className="w-full focus:outline-none"
            onChange={handleChange}
            required
          />
        </div>

        <button className="w-full bg-purple-700 text-white py-2 rounded-xl hover:bg-purple-800">
          S'inscrire
        </button>
      </form>
    </div>
  )
}