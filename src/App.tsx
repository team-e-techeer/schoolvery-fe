import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage/LoginPage';
import RegisterPage from './pages/Login/LoginPage/RegisterPage';
import MyInfoPage from './pages/MyInfoPage';
import ChattingPage from './pages/ChattingPage';
import WritingPage from './pages/Writing/WritingPage';
import SearchPage from './pages/Main/SearchPage';
import SearchDetailPage from './pages/Main/SearchDetailPage';
//import SearchWithCategory from './pages/Main/SearchWithCategoryPage';

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
        <Route path="/search" element={<SearchPage />}>
          <Route path=":searchValue" element={<SearchDetailPage />} />
        </Route>
        {/* <Route path="/category" element={<SearchWithCategory />}>
          <Route path=":name" element={<SearchWithCategory />} />
        </Route> */}
        <Route path="/detail/*" element={<SearchDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
