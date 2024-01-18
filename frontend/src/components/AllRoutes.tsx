// src/components/AllRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import PassNPlayPage from '../pages/PassNPlay';
import OnlinePage from '../pages/Online';
import RoomWithCodePage from '../pages/WithCode';
import AgainstBotPage from '../pages/AgainstBot';

const AllRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/passnplay" element={<PassNPlayPage />} />
      <Route path="/online" element={<OnlinePage />} />
      <Route path="/room" element={<RoomWithCodePage />} />
      <Route path="/againstbot" element={<AgainstBotPage />} />
      <Route path="/tournament" element={<HomePage />} />
    </Routes>
  );
};

export default AllRoutes;
