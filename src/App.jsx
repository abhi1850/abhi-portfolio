import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { routes } from './router';
import { theme } from './theme';

const router = createBrowserRouter(routes);

function App() {
    return (
        <StrictMode>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </StrictMode>
    );
}

export default App;
