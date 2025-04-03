export interface GrammarPoint {
  id: number;
  title: string;
  explanation: string;
  usage: string;
  examples: {
    sentence: string;
    translation: string;
  }[];
  notes?: string;
}

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

export interface GrammarUnit {
  title: string;
  introduction: string;
  grammarPoints: GrammarPoint[];
  vocabulary: VocabularyWord[];
}

export const grammarUnits: Record<string, GrammarUnit> = {
  unit1: {
    title: "第一單元：基礎語法",
    introduction: "本單元介紹日語最基本的語法結構，包括「です」和「ます」的使用。",
    grammarPoints: [
      {
        id: 1,
        title: "です (desu)",
        explanation: "「です」是日語中最基本的繫詞（相當於英語的 is/am/are），用於形容詞和名詞謂語句的結尾，表示禮貌語氣。",
        usage: "名詞/形容詞 + です",
        examples: [
          {
            sentence: "私は学生です。",
            translation: "我是學生。"
          },
          {
            sentence: "これは本です。",
            translation: "這是書。"
          },
          {
            sentence: "日本語は面白いです。",
            translation: "日語很有趣。"
          }
        ],
        notes: "「です」是最基本的禮貌體，在正式場合必須使用。"
      },
      {
        id: 2,
        title: "ます (masu)",
        explanation: "「ます」是動詞的禮貌形式，附加在動詞詞幹後。",
        usage: "動詞詞幹 + ます",
        examples: [
          {
            sentence: "毎日学校に行きます。",
            translation: "每天去學校。"
          },
          {
            sentence: "日本語を勉強します。",
            translation: "學習日語。"
          }
        ],
        notes: "所有動詞都有對應的ます形，這是最基本的禮貌形式。"
      }
    ],
    vocabulary: [
      {
        word: "学生",
        kana: "がくせい",
        katakana: "ガクセイ",
        romaji: "gakusei",
        definition: "學生",
        examples: [
          {
            sentence: "私は大学の学生です。",
            translation: "我是大學生。"
          }
        ]
      },
      {
        word: "先生",
        kana: "せんせい",
        katakana: "センセイ",
        romaji: "sensei",
        definition: "老師",
        examples: [
          {
            sentence: "田中先生は日本語の先生です。",
            translation: "田中老師是日語老師。"
          }
        ]
      }
    ]
  },
  unit2: {
    title: "第二單元：助詞的使用",
    introduction: "本單元介紹日語中最常用的助詞「は」、「が」和「を」的用法。",
    grammarPoints: [
      {
        id: 1,
        title: "は (wa) - 主題助詞",
        explanation: "「は」用來標記句子的主題，表示「說到...」或「關於...」。",
        usage: "名詞 + は",
        examples: [
          {
            sentence: "私は日本人です。",
            translation: "我是日本人。"
          },
          {
            sentence: "東京は大きい都市です。",
            translation: "東京是大城市。"
          }
        ],
        notes: "「は」雖然寫作「は」，但讀音為「wa」。"
      },
      {
        id: 2,
        title: "を (wo) - 賓語助詞",
        explanation: "「を」用來標記動作的對象（直接賓語）。",
        usage: "賓語 + を + 動詞",
        examples: [
          {
            sentence: "本を読みます。",
            translation: "讀書。"
          },
          {
            sentence: "水を飲みます。",
            translation: "喝水。"
          }
        ]
      }
    ],
    vocabulary: [
      {
        word: "本",
        kana: "ほん",
        katakana: "ホン",
        romaji: "hon",
        definition: "書",
        examples: [
          {
            sentence: "日本語の本を読みます。",
            translation: "讀日語書。"
          }
        ]
      },
      {
        word: "水",
        kana: "みず",
        katakana: "ミズ",
        romaji: "mizu",
        definition: "水",
        examples: [
          {
            sentence: "水を飲みます。",
            translation: "喝水。"
          }
        ]
      }
    ]
  }
}; 