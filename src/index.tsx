import { createRoot } from 'react-dom/client';
const container = document.getElementById('main');
const root = createRoot(container);
import App from './App';
root.render(<App />);
