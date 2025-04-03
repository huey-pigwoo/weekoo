"use client";

import React, { useState } from "react";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  Switch,
  FormControlLabel,
  Tooltip,
} from "@mui/material";
import {
  FullHiraganaData,
  hiragana,
  katakana,
  FullHiraganaDataWithDiacritics,
  hiraganaWithDiacritics,
  katakanaWithDiacritics,
  DiacriticsRow,
} from "./data";

export default function HiraganaPage() {
  // 控制使用的汉字表和是否带浊音
  const [alignment, setAlignment] = useState("full"); // 表类型
  const [isDiacritics, setIsDiacritics] = useState(false); // 是否浊音

  // 动态计算表数据
  const tableDataMap = {
    false: {
      full: FullHiraganaData,
      hiragana: hiragana,
      katakana: katakana,
    },
    true: {
      full: FullHiraganaDataWithDiacritics,
      hiragana: hiraganaWithDiacritics,
      katakana: katakanaWithDiacritics,
    },
  };

  const tableData = tableDataMap[isDiacritics][alignment];

  // 切换表类型
  const handleAlignmentChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    if (newAlignment) {
      setAlignment(newAlignment);
    }
  };

  // 切换是否带浊音
  const handleDiacriticsChange = ({ target: { checked } }) => {
    setIsDiacritics(checked);
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* 顶部控制栏 */}
      <div className="flex justify-between align-center">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleAlignmentChange}
          aria-label="Platform"
        >
          <ToggleButton value="full">全部</ToggleButton>
          <ToggleButton value="hiragana">平假名</ToggleButton>
          <ToggleButton value="katakana">片假名</ToggleButton>
        </ToggleButtonGroup>

        <FormControlLabel
          checked={isDiacritics}
          onChange={handleDiacriticsChange}
          control={<Switch />}
          label="帶濁音"
        />
      </div>

      {/* 表格显示 */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>a</TableCell>
              <TableCell>i</TableCell>
              <TableCell>u</TableCell>
              <TableCell>e</TableCell>
              <TableCell>o</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.row}>
                <TableCell>{row.row}</TableCell>
                {row.chars.map((charData, index) => (
                  <TableCell key={index}>
                    {charData.char ? (
                      <Tooltip title={`罗马音: ${charData.romaji}`} arrow>
                        <span>{charData.char}</span>
                      </Tooltip>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
