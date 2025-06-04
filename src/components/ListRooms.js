import HotelCard from "@/app/ui/HotelCard"

export default async function ListRooms() {
  let rooms = []

  try {
    const res = await fetch('http://localhost/Gestion-hotel-/backend/index.php?action=listRooms', {
      cache: 'no-store', // Pour éviter la mise en cache côté serveur
    })

    if (!res.ok) {
      throw new Error("Erreur de récupération des chambres")
    }

    rooms = await res.json()
  } catch (error) {
    console.error('Erreur lors du chargement des chambres:', error)
    // Affichage simple en cas d'erreur
    return (
      <div className="text-center py-10 text-red-500">
        Impossible de charger les chambres. Veuillez réessayer plus tard.
      </div>
    )
  }

  if (!rooms || rooms.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        Aucune chambre disponible pour le moment.
      </div>
    )
  }

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Nos Chambres Disponibles</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  )
}
