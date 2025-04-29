import { GLOBAL_WORDS, Word } from '../constants/words';
import { UNIT_WORDS } from '../constants/unitWords';

export function getUnitWords(unitId: string): Word[] {
    const unitReference = UNIT_WORDS[unitId];
    if (!unitReference) {
        return [];
    }

    return unitReference.wordIds
        .map(wordId => GLOBAL_WORDS.find(word => word.id === wordId))
        .filter((word): word is Word => word !== undefined);
}

export function searchWords(query: string): Word[] {
    return GLOBAL_WORDS.filter(word =>
        word.word.includes(query) ||
        word.kana.includes(query) ||
        word.romaji.includes(query) ||
        word.definition.includes(query)
    );
} 