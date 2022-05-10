import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/Login/LoginPage/LoginPage';
import RegisterPage from './pages/Login/LoginPage/RegisterPage';
import MyInfoPage from './pages/MyInfoPage';
import ChattingPage from './pages/ChattingPage';
import WritingPage from './pages/WritingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/myInfo" element={<MyInfoPage />} />
        <Route path="/chat" element={<ChattingPage />} />
        <Route path="/writing" element={<WritingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
