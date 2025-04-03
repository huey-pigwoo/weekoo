'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, Paper, Divider, List, ListItem, ListItemText } from "@mui/material";
import { vocabularyUnits, VocabularyUnit } from '../vocabulary/data';

export default function VocabularyUnitContent({ unit }: { unit: string }) {
  const [unitData, setUnitData] = useState<VocabularyUnit | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模擬 API 調用
    const fetchData = async () => {
      try {
        setUnitData(vocabularyUnits[unit]);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [unit]);

  if (loading || !unitData) {
    return <Box>加載中...</Box>;
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* 左側單詞列表 */}
      <Box sx={{ 
        width: '70%', 
        padding: 2, 
        borderRight: '1px solid #e0e0e0',
        overflow: 'auto'
      }}>
        <Typography variant="h4" gutterBottom>
          {unitData.title}
        </Typography>
        
        <Typography variant="body1" paragraph>
          {unitData.introduction}
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
          {unitData.theme}
        </Typography>

        <Divider sx={{ my: 3 }} />

        <List>
          {unitData.words.map((word, index) => (
            <Paper key={index} elevation={2} sx={{ mb: 2, p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {word.word} 
                <Typography component="span" color="textSecondary" sx={{ ml: 2 }}>
                  {word.kana}
                </Typography>
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="textSecondary">
                  羅馬拼音：{word.romaji}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  意思：{word.definition}
                </Typography>
              </Box>

              <Typography variant="subtitle1" gutterBottom>
                例句：
              </Typography>
              {word.examples.map((example, idx) => (
                <Box key={idx} sx={{ mb: 1 }}>
                  <Typography variant="body1">
                    {example.sentence}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {example.translation}
                  </Typography>
                </Box>
              ))}
            </Paper>
          ))}
        </List>
      </Box>

      {/* 右側學習提示 */}
      <Box sx={{ 
        width: '30%', 
        padding: 2,
        overflow: 'auto'
      }}>
        <Typography variant="h5" gutterBottom>
          學習提示
        </Typography>
        <Paper elevation={1} sx={{ p: 2 }}>
          <Typography variant="body1" paragraph>
            1. 請注意單詞的發音和語調
          </Typography>
          <Typography variant="body1" paragraph>
            2. 記住單詞時，最好能夠同時記住例句
          </Typography>
          <Typography variant="body1" paragraph>
            3. 試著用這些單詞造句練習
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
} 