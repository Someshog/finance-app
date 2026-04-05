import { create } from "zustand";

export type Role = "admin" | "viewer";

interface RoleState {
  role: Role;
  setRole: (role: Role) => void;
}

export const useRole = create<RoleState>((set) => ({
  role: "admin",
  setRole: (role) => set({ role }),
}));
