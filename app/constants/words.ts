export interface Word {
    id: string;          // 唯一標識符
    word: string;        // 單詞
    kana: string;        // 平假名
    katakana: string;    // 片假名
    romaji: string;      // 羅馬字
    definition: string;  // 中文含義
    partOfSpeech: string;// 詞性
    level: '初級' | '中級' | '高級'; // 難度等級
    examples: Array<{
        sentence: string;
        translation: string;
    }>;
}

// 全局單詞庫
export const GLOBAL_WORDS: Word[] = [
    {
        id: 'w001',
        word: '勉強',
        kana: 'べんきょう',
        katakana: 'ベンキョウ',
        romaji: 'benkyou',
        definition: '學習、讀書',
        partOfSpeech: '名詞・する動詞',
        level: '初級',
        examples: [
            { sentence: '日本語を勉強します。', translation: '學習日語。' },
            { sentence: '勉強が好きです。', translation: '喜歡學習。' }
        ]
    },
    // ... 更多單詞
];