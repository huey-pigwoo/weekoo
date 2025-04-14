'use client';

import { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, Paper, Chip } from '@mui/material';
import { Word } from '../constants/words';
import { getUnitWords } from '../utils/wordUtils';

interface VocabularyUnitContentProps {
  unit: string;
}

export default function VocabularyUnitContent({ unit }: VocabularyUnitContentProps) {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const unitWords = getUnitWords(unit);
    setWords(unitWords);
  }, [unit]);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        第 {unit} 課單詞
      </Typography>
      
      <List>
        {words.map((word) => (
          <ListItem key={word.id} component={Paper} sx={{ mb: 2, display: 'block', p: 2 }}>
            <Box>
              <Typography variant="h6">
                {word.word}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {word.kana} ({word.romaji})
              </Typography>
              <Chip 
                label={word.level} 
                color={
                  word.level === '初級' ? 'success' : 
                  word.level === '中級' ? 'warning' : 'error'
                }
                size="small"
                sx={{ mt: 1 }}
              />
              <Chip 
                label={word.partOfSpeech} 
                variant="outlined"
                size="small"
                sx={{ ml: 1, mt: 1 }}
              />
              <Typography variant="body1" sx={{ mt: 2 }}>
                {word.definition}
              </Typography>
              
              <Typography variant="subtitle2" color="primary" sx={{ mt: 2 }}>
                例句：
              </Typography>
              {word.examples.map((example, idx) => (
                <Box key={idx} sx={{ mt: 1 }}>
                  <Typography variant="body2">
                    {example.sentence}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {example.translation}
                  </Typography>
                </Box>
              ))}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
} 