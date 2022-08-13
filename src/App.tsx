import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage/LoginPage';
import RegisterPage from './pages/Login/LoginPage/RegisterPage';
import WritingPage from './pages/Writing/WritingPage';
import MyInfoPage from './pages/MyPage/MyInfoPage';
import MyProfilePage from './pages/MyPage/MyProfilePage';
import MyWritingPage from './pages/MyPage/MyWritingListPage';
import SearchPage from './pages/Main/SearchPage';
import SearchDetailPage from './pages/Main/SearchDetailPage';
import SearchWithCategory from './pages/Main/SearchWithCategoryPage';
import ChatPage from './pages/Chat/ChatPage';
import ChatRoomPage from './pages/Chat/ChatRoomPage';
import AlarmPage from './pages/Alarm/AlarmPage';
import SchoolSearchPage from './pages/Login/SearchSchool/SchoolSearchPage';
import { ReactQueryDevtools } from 'react-query/devtools';
export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/schoolSearch" element={<SchoolSearchPage />} />
        <Route path="/myInfo" element={<MyInfoPage />} />
        <Route path="/myProfile" element={<MyProfilePage />} />
        <Route path="/myWriting" element={<MyWritingPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writing/?id=:id" element={<WritingPage />} />
        <Route path="/search/" element={<SearchPage />}>
          <Route path="?search:searchValue" element={<SearchDetailPage />} />
        </Route>
        <Route path="/category" element={<SearchWithCategory />}>
          <Route path=":name" element={<SearchWithCategory />} />
        </Route>
        <Route path="/detail/*" element={<SearchDetailPage />} />
        <Route path="/chat" element={<ChatRoomPage />} />
        <Route path="/chat/rooms" element={<ChatPage />} />
        <Route path="/chat/?room=:room" element={<ChatRoomPage />} />
        <Route path="/notification" element={<AlarmPage />} />
      </Routes>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </BrowserRouter>
  );
}
