// src/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './components/AllRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <AllRoutes />
    </Router>
  );
};

export default App;
