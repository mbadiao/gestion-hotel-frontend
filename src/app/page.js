'use client'
import ListRooms from "@/components/ListRooms";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
export default function Home() {
   const { setUser } = useAuthStore()
  
    useEffect(() => {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    }, [])
  return (
    <>
    <ListRooms/>
    </>
  );
}
