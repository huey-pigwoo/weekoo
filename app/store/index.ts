import { create } from 'zustand';

interface Word {
  id: string;
  text: string;
  meaning?: string;
  [key: string]: any;
}

interface AppState {
  currentUnit: string;
  selectedWord: Word | null;
  setCurrentUnit: (unit: string) => void;
  setSelectedWord: (word: Word | null) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentUnit: '',
  selectedWord: null,
  setCurrentUnit: (unit) => set({ currentUnit: unit }),
  setSelectedWord: (word) => set({ selectedWord: word })
}));