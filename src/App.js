import './App.css';
import Sidebar from './components/Sidebar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from './pages/Feed.js';
import Profile from './pages/Profile.js';
import Setting from './pages/Setting.js';
import Layout from './components/Layout.js';
import Search from './pages/Search.js';
import CommunityProfile from './pages/CommunityProfile.js';

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route index element={<Feed />} />
            <Route path="/feed" element={<Feed />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/search" element={<Search />} />
            <Route path="/communityprofile" element={<CommunityProfile />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
