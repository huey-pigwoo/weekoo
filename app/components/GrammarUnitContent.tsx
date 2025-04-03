"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { grammarUnits, GrammarUnit } from "../grammar/data";

export default function GrammarUnitContent({ unit }: { unit: string }) {
  const [unitData, setUnitData] = useState<GrammarUnit | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模擬 API 調用
    const fetchData = async () => {
      try {
        setUnitData(grammarUnits[unit]);
      } catch (error) {
        console.error("Error fetching data:", error);
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
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* 左側文法規則 */}
      <Box
        sx={{
          width: "70%",
          padding: 2,
          borderRight: "1px solid #e0e0e0",
          overflow: "auto",
        }}
      >
        <Typography component="div" variant="h4" gutterBottom>
          {unitData.title}
        </Typography>

        <Typography component="div" variant="body1" paragraph>
          {unitData.introduction}
        </Typography>

        <Divider sx={{ my: 3 }} />

        {unitData.grammarPoints.map((point) => (
          <Paper
            key={`grammar-point-${point.id}`}
            elevation={2}
            sx={{ padding: 2, marginBottom: 2 }}
          >
            <Typography component="div" variant="h6" gutterBottom>
              {point.title}
            </Typography>

            <Typography component="div" variant="body1" paragraph>
              {point.explanation}
            </Typography>

            <Typography component="div" variant="subtitle1" gutterBottom>
              用法：
            </Typography>
            <Typography component="div" variant="body1" paragraph>
              {point.usage}
            </Typography>

            <Typography component="div" variant="subtitle1" gutterBottom>
              例句：
            </Typography>
            {point.examples.map((example, idx) => (
              <Box key={`example-${point.id}-${idx}`} sx={{ mb: 1 }}>
                <Typography component="div" variant="body1">
                  {example.sentence}
                </Typography>
                <Typography
                  component="div"
                  variant="body2"
                  color="textSecondary"
                >
                  {example.translation}
                </Typography>
              </Box>
            ))}

            {point.notes && (
              <>
                <Typography
                  component="div"
                  variant="subtitle1"
                  gutterBottom
                  sx={{ mt: 2 }}
                >
                  注意：
                </Typography>
                <Typography
                  component="div"
                  variant="body2"
                  color="textSecondary"
                >
                  {point.notes}
                </Typography>
              </>
            )}
          </Paper>
        ))}
      </Box>

      {/* 右側課文單詞 */}
      <Box
        sx={{
          width: "30%",
          padding: 2,
          overflow: "auto",
        }}
      >
        <Typography component="div" variant="h5" gutterBottom>
          單元詞彙
        </Typography>

        {unitData.vocabulary.map((word, wordIndex) => (
          <Paper key={`vocab-${wordIndex}`} elevation={1} sx={{ p: 2, mb: 2 }}>
            <Typography component="div" variant="subtitle1">
              {word.word} ({word.kana})
            </Typography>
            <Typography component="div" variant="body2" color="textSecondary">
              {word.definition}
            </Typography>
            {word.examples.map((example, exampleIndex) => (
              <Box
                key={`vocab-example-${wordIndex}-${exampleIndex}`}
                sx={{ mt: 1 }}
              >
                <Typography component="div" variant="body2">
                  {example.sentence}
                </Typography>
                <Typography
                  component="div"
                  variant="body2"
                  color="textSecondary"
                >
                  {example.translation}
                </Typography>
              </Box>
            ))}
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
