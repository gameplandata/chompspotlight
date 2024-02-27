import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import UserProfilePage, {userInfo} from './Pages/Profile/UserProfilePage'
import EditProfilePage from './Pages/Profile/EditProfilePage';
import Search from './Pages/Search'

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
          <Route path="/search/:searchText" exact element={<Search/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
