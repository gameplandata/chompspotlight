import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import UserProfilePage, {userInfo} from './Pages/UserProfilePage'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<UserProfilePage user={userInfo}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
