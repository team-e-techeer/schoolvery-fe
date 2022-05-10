import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './src/GlobalStyle';
import App from './src/App';
import { RecoilRoot } from 'recoil';
const rootNode = document.getElementById('root');

const queryClient = new QueryClient();

rootNode &&
  ReactDOM.createRoot(rootNode).render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  );
