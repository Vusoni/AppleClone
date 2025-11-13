// Here i will store zustand store
// In order to keep track of the information of which model is currently being shown
import { create } from "zustand"

const useAppleStore = create((set) => ({
  color: "#2e2c2e",
  setColor: (color) => set({ color}),

  scale: 0.8,
  setScale: (color) => set({ color}),

  reset: () =>({ color: "#2e2c2e", scale: 0.08 }), // Reset State
}))

export default useAppleStore