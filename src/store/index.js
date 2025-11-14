// Here i will store zustand store
// In order to keep track of the information of which model is currently being shown
import { create } from 'zustand';

const useAppleStore = create((set) => ({
    color: '#2e2c2e',
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    texture: '/videos/feature-1.mp4',
    setTexture: (texture) => set({ texture }),

    reset: () => set({ color: '#2e2c2e', scale: 0.08, texture: '/videos/feature-1.mp4' }), // Reset State
}))

export default useAppleStore;