'use client'

import {
  UserGroupIcon,
  WifiIcon,
  DevicePhoneMobileIcon,
  CurrencyEuroIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'
import { CakeIcon } from '@heroicons/react/24/solid' // Remplace pour Petit-déjeuner

export default function HotelCard({ hotel }) {
  const imageUrl = `https://fra.cloud.appwrite.io/v1/storage/buckets/668a88750030263d4a27/files/6773dc6e000f258333f2/view?project=668a87bc0005de9f3815`

  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow hover:shadow-lg transition-all">
      {/* Image */}
      <img src={imageUrl} alt={hotel.title} className="h-48 w-full object-cover" />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{hotel.title}</h2>

        <div className="mt-1 flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <UserGroupIcon className="h-4 w-4" />
            <span>2 Guests</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckBadgeIcon className="h-4 w-4" />
            <span>{hotel.type}</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <WifiIcon className="h-4 w-4" />
            Wifi
          </div>
          <div className="flex items-center gap-1">
            <CakeIcon className="h-4 w-4" />
            Petit-déjeuner
          </div>
        </div>

        {/* Price + CTA */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-900">
            {hotel.price}€<span className="text-sm text-gray-500"> / nuit</span>
          </span>
          <a
            href={`/reservation/${hotel.id}`}
            className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition"
          >
            Réserver
          </a>
        </div>
      </div>
    </div>
  )
}
