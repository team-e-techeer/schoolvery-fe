import { createRoot, Root } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './src/GlobalStyle';
import App from './src/App';

const container = document.getElementById('main');
const root: Root | null = container && createRoot(container);
const queryClient = new QueryClient();

root &&
  root.render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  );
