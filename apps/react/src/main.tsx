// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './app/app';

const container: any = document.getElementById('root');
const root = createRoot(container);

root.render(
  // <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  // </StrictMode>
);
