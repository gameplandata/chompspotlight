import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Here you can implement your authentication logic
    // For simplicity, let's just check if username and password are not empty
    if (username !== '' && password !== '') {
      setIsLoggedIn(true);
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;