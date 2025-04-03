"use client";

import dynamic from 'next/dynamic';
import { Box, CircularProgress } from '@mui/material';

const GrammarUnitContent = dynamic(
  () => import('../../components/GrammarUnitContent'),
  {
    ssr: false,
    loading: () => (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    ),
  }
);

export default function GrammarUnitPage({ params }: { params: { unit: string } }) {
  if (!params?.unit) {
    return <div>無效的單元參數</div>;
  }
  
  return <GrammarUnitContent unit={params.unit} />;
}