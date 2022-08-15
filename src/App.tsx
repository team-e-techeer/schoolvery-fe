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
import { useEffect } from 'react';
import { setMetaTags } from './util/setMetatag';
// import './app.css';
export default function App() {
  // useEffect(() => {
  //   setMetaTags({
  //     title: '스쿨버리',
  //     description: '배달비를 공유해보세요',
  //     imageUrl: 'https://user-images.githubusercontent.com/54137044/184621844-276e4d47-d03d-40e7-afae-2ac1348ce1a4.png',
  //   });
  // }, []);

  return (
    <BrowserRouter>
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
