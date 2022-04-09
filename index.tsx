import { createRoot, Root } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Global } from '@emotion/core';
import reset from './reset';
import App from './src/App';

const container = document.getElementById('main');
const root: Root | null = container && createRoot(container);
const queryClient = new QueryClient();

root &&
  root.render(
    <RecoilRoot>
      <Global styles={reset} />
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  );
