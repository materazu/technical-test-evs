// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { CssBaseline } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './app/app';

const container: any = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <StrictMode>
    <RecoilRoot>
      <CssBaseline />
      <App />
    </RecoilRoot>
  // </StrictMode>
);
