import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
