import { createRoot, Root } from 'react-dom/client';
import App from './src/App';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const container = document.getElementById('main');
const root: Root | null = container && createRoot(container);
const queryClient = new QueryClient();

root &&
  root.render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  );
