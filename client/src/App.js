import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import UserProfilePage, {userInfo} from './Pages/Profile/UserProfilePage'
import EditProfilePage from './Pages/Profile/EditProfilePage';
import Search from './Pages/Search'
import Feed from './Pages/Feed'
import { useAuthContext } from './Hooks/useAuthContext';
import PrivateRoute from './PrivateRoute';

function App() {
  const { user } = useAuthContext();
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/"/>} />
          <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/"/>} />
          {/* <Route path="/profile" element={<PrivateRoute element={<UserProfilePage element={user} />} />} /> */}
          <Route path="/profile" element={<UserProfilePage user={userInfo}/>} />
          <Route path="/profile/edit" element={<PrivateRoute element={<EditProfilePage />} />} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/search/:searchText" exact element={<Search/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;