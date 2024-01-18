// src/pages/PassNPlayPage.tsx
import React from 'react';
import TicTacToeGame from '../components/TicTacToeGame'; // Assuming you have a TicTacToeGame component

const PassNPlayPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <h1>Pass and Play Mode</h1>
      <TicTacToeGame />
    </div>
  );
};

const pageStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '50px',
};

export default PassNPlayPage;
