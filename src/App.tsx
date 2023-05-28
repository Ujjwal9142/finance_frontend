import { useMemo } from 'react';
import { createTheme } from '@mui/material';
import { themeSettings } from './theme';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/scenes/navbar';
import Dashboard from '@/scenes/dashboard';
import Predictions from '@/scenes/predictions';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box height="100%" width="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route element={<Dashboard />} path="/" />
              <Route element={<Predictions />} path="/predictions" />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
