import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      user: { name: "방문자", type: "미정" },
      setUser: (user) => set({ user }),
      modifyType: (newType) =>
        set((state) => ({
          user: {
            ...state.user,
            type: newType,
          },
        })),
      setAsset: (asset) =>
        set((state) => ({
          user: {
            ...state.user,
            asset: asset,
          },
        })),
      clearUser: () => set({ user: { name: "방문자", type: "미정" } }),
    }),
    {
      name: "user-storage",
    }
  )
);
export default useUserStore;
