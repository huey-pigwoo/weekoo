import { create } from 'zustand';

interface AppState {
  currentUnit: string;
  selectedWord: any;
  setCurrentUnit: (unit: string) => void;
  setSelectedWord: (word: any) => void;
}

export const useAppStore = create<AppState>((set) => ({
  currentUnit: '',
  selectedWord: null,
  setCurrentUnit: (unit) => set({ currentUnit: unit }),
  setSelectedWord: (word) => set({ selectedWord: word })
})); 