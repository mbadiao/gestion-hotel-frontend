'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import {
  UserGroupIcon,
  WifiIcon,
  DevicePhoneMobileIcon,
  CurrencyEuroIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'
import { CakeIcon, StarIcon } from '@heroicons/react/24/solid'
import ReservationButton from '@/app/ui/ReservationButton'
export default function HotelDetails() {
  const { id } = useParams()
  const [hotel, setHotel] = useState(null)
  const [days, setDays] = useState(1)

  useEffect(() => {
    async function fetchHotel() {
      const res = await fetch(`http://localhost/gestion_hotel/backend/index.php?action=getRoom&id=${id}`)
      const data = await res.json()
      setHotel(data)
    }
    fetchHotel()
  }, [id])

  if (!hotel) return <div className="p-10 text-center text-gray-500">Chargement...</div>

  const totalPrice = (parseFloat(hotel.price) * days).toFixed(2)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-lg overflow-hidden shadow  bg-white">
          <img src={hotel.url} alt={hotel.title} className="w-full h-72 object-cover" />

          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-800">{hotel.title}</h1>
              <span className="text-sm text-white bg-green-500 rounded-full px-3 py-1">
                {hotel.status === 'available' ? 'Disponible' : 'Indisponible'}
              </span>
            </div>
            <p className="text-gray-600">{hotel.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckBadgeIcon className="w-5 h-5" />
                Type : {hotel.type}
              </div>
              <div className="flex items-center gap-2">
                <DevicePhoneMobileIcon className="w-5 h-5" />
                {hotel.phone}
              </div>
              <div className="flex items-center gap-2">
                <WifiIcon className="w-5 h-5" />
                Wifi
              </div>
              <div className="flex items-center gap-2">
                <CakeIcon className="w-5 h-5" />
                Petit-déjeuner
              </div>
              <div className="flex items-center gap-2">
                <CurrencyEuroIcon className="w-5 h-5" />
                {hotel.price} XOF / nuit
              </div>
              <div className="flex items-center gap-2">
                <UserGroupIcon className="w-5 h-5" />
                2 Guests
              </div>
            </div>

            <div className="mt-6 border-t pt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Réserver cette chambre</h3>
              <div className="flex items-center gap-4">
                <label htmlFor="days" className="flex items-center gap-2 text-gray-700">
                  <CalendarDaysIcon className="w-5 h-5" />
                  Nombre de jours :
                </label>
                <input
                  type="number"
                  id="days"
                  min="1"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="w-20 border border-gray-300 rounded px-2 py-1 text-center"
                />
              </div>
              <p className="mt-4 text-gray-700">
                Total : <span className="text-lg font-bold">{totalPrice} XOF</span>
              </p>
             <ReservationButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
