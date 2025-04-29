'use client';

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Box } from '@mui/material';
import { NAVIGATION } from '../constants/navigation';
import PageDispatch from '../PageDispatch';
import { ErrorBoundary } from '../utils/errorBoundary';

// 创建主题
const theme = createTheme({
  palette: { 
    mode: 'dark',
    primary: { main: '#1976d2' },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
  },
  typography: {
    fontFamily: [
      'var(--font-geist-sans)',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif'
    ].join(','),
  },
});

function useDemoRouter(initialPath: string) {
  const [pathname, setPathname] = React.useState(initialPath);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const router = React.useMemo(() => ({
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path: string | URL) => {
      console.log('Navigating to:', path);
      setPathname(String(path));
    },
  }), [pathname]);

  if (!isClient) {
    return {
      pathname: initialPath,
      searchParams: new URLSearchParams(),
      navigate: () => {},
    };
  }

  return router;
}

export default function HomePage() {
  const router = useDemoRouter('/hiragana');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
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
        <span>Loading...</span>
      </Box>
    );
  }

  return (
    <Box component="div">
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <AppProvider 
            navigation={NAVIGATION} 
            router={router}
          >
            <DashboardLayout>
              <PageContainer>
                {PageDispatch(router, NAVIGATION)}
              </PageContainer>
            </DashboardLayout>
          </AppProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </Box>
  );
} 