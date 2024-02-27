import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import UserProfilePage, {userInfo} from './Pages/Profile/UserProfilePage'
import EditProfilePage from './Pages/Profile/EditProfilePage';
import Search from './Pages/Search'
import Feed from './Pages/Feed'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/profile" element={<UserProfilePage user={userInfo}/>} />
          <Route path="/profile/edit" element={<EditProfilePage user={userInfo}/>} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/feed" element={<Feed/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
