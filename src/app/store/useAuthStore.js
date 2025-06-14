import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    set({ user })
  },
  logout: () => {
    localStorage.removeItem("user")
    set({ user: null })
  },
}))
