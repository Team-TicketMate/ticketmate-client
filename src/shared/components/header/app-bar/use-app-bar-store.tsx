import { create } from 'zustand';

interface AppBarState {
  title: string;
  backURL: string | null;
  setTitle: (title: string) => void;
  setbackURL: (backURL: string | null) => void;
}

export const useAppBarStore = create<AppBarState>((set) => ({
  title: '',
  backURL: null,
  setTitle: (title) => set({ title }),
  setbackURL: (backURL) => set({ backURL }),
}));
