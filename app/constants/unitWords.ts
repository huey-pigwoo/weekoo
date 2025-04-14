import { Word } from './words';

export interface UnitWordReference {
  unitId: string;
  wordIds: string[];  // 引用 GLOBAL_WORDS 中的 id
  notes?: string;     // 單元相關的註釋
}

// 每個單元的單詞引用
export const UNIT_WORDS: Record<string, UnitWordReference> = {
  'unit1': {
    unitId: 'unit1',
    wordIds: ['w001'],
    notes: '第一單元的基礎詞彙'
  },
  // ... 更多單元
}; 