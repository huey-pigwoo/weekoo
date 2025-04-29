'use client';

import dynamic from 'next/dynamic';
import { Box, CircularProgress } from '@mui/material';

// 动态导入页面组件
const HiraganaPage = dynamic(() => import("./hiragana/page"), {
  ssr: false,
  loading: () => <LoadingComponent />,
});

const VocabularyPage = dynamic(() => import("./vocabulary/page"), {
  ssr: false,
  loading: () => <LoadingComponent />,
});

const VocabularyUnitPage = dynamic(() => import("./vocabulary/[unit]/page"), {
  ssr: false,
  loading: () => <LoadingComponent />,
});

const GrammarPage = dynamic(() => import("./grammar/page"), {
  ssr: false,
  loading: () => <LoadingComponent />,
});

const GrammarUnitPage = dynamic(() => import("./grammar/[unit]/page"), {
  ssr: false,
  loading: () => <LoadingComponent />,
});

function LoadingComponent() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </Box>
  );
}

export default function PageDispatch(router: any) {
  const { pathname } = router;
  
  // 提取 unit 值
  const vocabularyUnitMatch = pathname.match(/^\/vocabulary\/(.+)$/);
  const grammarUnitMatch = pathname.match(/^\/grammar\/(.+)$/);
  
  const vocabularyUnit = vocabularyUnitMatch ? vocabularyUnitMatch[1] : null;
  const grammarUnit = grammarUnitMatch ? grammarUnitMatch[1] : null;
  console.log('vocabularyUnit: ', vocabularyUnit);
  console.log('grammarUnit: ', grammarUnit);

  // 路径分发
  if (pathname === "/hiragana") {
    return <HiraganaPage />;
  }
  
  if (pathname === "/vocabulary") {
    return <VocabularyPage />;
  }
  
  if (vocabularyUnit) {
    return <VocabularyUnitPage params={{ unit: vocabularyUnit }} />;
  }
  
  if (pathname === "/grammar") {
    return <GrammarPage />;
  }
  
  if (grammarUnit) {
    return <GrammarUnitPage params={{ unit: grammarUnit }} />;
  }

  return <div>404 Not Found</div>;
}