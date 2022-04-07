import { createRoot, Root } from 'react-dom/client';
const container = document.getElementById('main');
const root: Root | null = container && createRoot(container);
import App from './src/App';
root && root.render(<App />);
