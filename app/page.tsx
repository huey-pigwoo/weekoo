'use client';

import dynamic from 'next/dynamic';
import { Box, CircularProgress } from '@mui/material';

// 使用 NoSSR 包装的主页面组件
const HomePage = dynamic(
  () => import('./components/HomePage'),
  {
    ssr: false,
    loading: () => (
      <Box 
        component="div"
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          width: '100vw'
        }}
      >
        <CircularProgress />
      </Box>
    )
  }
);

export default function Page() {
  return (
    <Box component="div">
      <HomePage />
    </Box>
  );
}