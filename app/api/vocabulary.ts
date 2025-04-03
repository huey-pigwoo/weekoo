// 建议添加统一的 API 层
export const vocabularyApi = {
  getUnitWords: async (unit: string) => {
    try {
      const response = await fetch(`/api/vocabulary/${unit}`);
      return await response.json();
    } catch (error) {
      console.error('获取单词数据失败:', error);
      return [];
    }
  }
}; 