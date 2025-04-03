// 建议添加统一的类型定义文件
export interface Word {
  word: string;
  kana: string;
  katakana: string;
  romaji: string;
  definition: string;
  pronunciationUrl: string;
  examples: Example[];
}

export interface Example {
  sentence: string;
  translation: string;
} 