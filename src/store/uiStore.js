import create from 'zustand'

const useStore = create((set) => ({
  sidebarOpen: false,
  isSidebarCollapsed: false,
  setSidebarOpen: (value) => set((state) => ({ sidebarOpen: value })),
  setIsSidebarCollapsed: (value) => set((state) => ({ isSidebarCollapsed: value })),
}))

export default useStore