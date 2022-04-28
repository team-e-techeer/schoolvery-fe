import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import PersonalPage from './pages/PersonalPage';
import ChattingPage from './pages/ChattingPage';
import WritingPage from './pages/WritingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/myInfo" element={<PersonalPage />} />
        <Route path="/chat" element={<ChattingPage />} />
        <Route path="/writing" element={<WritingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
