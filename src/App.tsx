import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage/LoginPage';
import RegisterPage from './pages/Login/LoginPage/RegisterPage';
import WritingPage from './pages/Writing/WritingPage';
import MyInfoPage from './pages/Mypage/MyInfoPage';
import MyWritingPage from './pages/Mypage/MyWritingPage';
import SearchPage from './pages/Main/SearchPage';
import SearchDetailPage from './pages/Main/SearchDetailPage';
import SearchWithCategory from './pages/Main/SearchWithCategoryPage';
import ChatPage from './pages/Chat/ChatPage';
import ChatRoomPage from './pages/Chat/ChatRoomPage';
import AlarmPage from './pages/Alarm/AlarmPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/myInfo" element={<MyInfoPage />} />
        <Route path="/myWriting" element={<MyWritingPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/search" element={<SearchPage />}>
          <Route path=":searchValue" element={<SearchDetailPage />} />
        </Route>
        <Route path="/category" element={<SearchWithCategory />}>
          <Route path=":name" element={<SearchWithCategory />} />
        </Route>
        <Route path="/detail/*" element={<SearchDetailPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/:roomName" element={<ChatRoomPage />} />
        <Route path="/notification" element={<AlarmPage />} />
      </Routes>
    </BrowserRouter>
  );
}
