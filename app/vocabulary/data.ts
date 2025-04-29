export interface VocabularyWord {
  word: string;
  kana: string;
  katakana: string;
  romaji: string;
  definition: string;
  examples: {
    sentence: string;
    translation: string;
  }[];
}

export interface VocabularyUnit {
  title: string;
  introduction: string;
  theme: string;
  words: VocabularyWord[];
}

export const vocabularyUnits: Record<string, VocabularyUnit> = {
  unit1: {
    title: "自我介紹",
    introduction: "本單元介紹在自我介紹時常用的詞彙，包括姓名、國籍、職業等基本表達。",
    theme: "自我介紹相關詞彙",
    words: [
      {
        word: '私',
        kana: 'わたし',
        katakana: 'ワタシ',
        romaji: 'watashi',
        definition: '我、自己（用于第一人称）',
        examples: [
          { sentence: '私は学生です。', translation: '我是學生。' },
          { sentence: '私の名前は田中です。', translation: '我的名字是田中。' }
        ]
      },
      {
        word: '学生',
        kana: 'がくせい',
        katakana: 'ガクセイ',
        romaji: 'gakusei',
        definition: '學生',
        examples: [
          { sentence: '私は大学の学生です。', translation: '我是大學生。' },
          { sentence: '彼も学生です。', translation: '他也是學生。' }
        ]
      },
      {
        word: '先生',
        kana: 'せんせい',
        katakana: 'センセイ',
        romaji: 'sensei',
        definition: '老師',
        examples: [
          { sentence: '山田先生は日本語の先生です。', translation: '山田老師是日語老師。' },
          { sentence: '先生、おはようございます。', translation: '老師，早安。' }
        ]
      }
    ]
  },
  unit2: {
    title: "日常生活",
    introduction: "本單元介紹日常生活中常用的詞彙，包括時間、飲食、交通等基本用語。",
    theme: "日常生活相關詞彙",
    words: [
      {
        word: '朝',
        kana: 'あさ',
        katakana: 'アサ',
        romaji: 'asa',
        definition: '早上',
        examples: [
          { sentence: '私は朝6時に起きます。', translation: '我早上6點起床。' },
          { sentence: '朝ご飯を食べます。', translation: '吃早餐。' }
        ]
      },
      {
        word: '電車',
        kana: 'でんしゃ',
        katakana: 'デンシャ',
        romaji: 'densha',
        definition: '電車',
        examples: [
          { sentence: '電車で学校に行きます。', translation: '坐電車去學校。' },
          { sentence: '次の電車は3時です。', translation: '下一班電車是3點。' }
        ]
      }
    ]
  }
}; 