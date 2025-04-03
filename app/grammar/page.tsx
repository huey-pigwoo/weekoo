"use client";

import dynamic from 'next/dynamic';
import { Box, CircularProgress } from '@mui/material';

const GrammarContent = dynamic(
  () => import('../components/GrammarContent'),
  {
    ssr: false,
    loading: () => (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    ),
  }
);

export default function GrammarPage() {
  return <GrammarContent />;
}