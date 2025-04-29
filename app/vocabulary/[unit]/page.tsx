"use client";

import dynamic from 'next/dynamic';
import { Box, CircularProgress } from '@mui/material';

const VocabularyUnitContent = dynamic(
  () => import('../../components/VocabularyUnitContent'),
  {
    ssr: false,
    loading: () => (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    ),
  }
);

export default function VocabularyUnitPage({ params }: { params: { unit: string } }) {
  if (!params?.unit) {
    return <div>無效的單元參數</div>;
  }
  
  return <VocabularyUnitContent unit={params.unit} />;
}