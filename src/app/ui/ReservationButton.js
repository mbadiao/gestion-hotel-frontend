'use client'
import { useAuthStore } from "../store/useAuthStore"
import { useRouter } from "next/navigation"

export default function ReservationButton() {

    const { user } = useAuthStore()
    const router = useRouter()

    const handleReservation = () => {
        if(!user) {
            router.push("/login")
            return
        }

        router.push(`/reservation/${roomId}`)
    }

    return (
         <button
                className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md"
                onClick={handleReservation}
              >
                Confirmer la réservation
        </button>
    )
}