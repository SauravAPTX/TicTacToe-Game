// src/pages/OnlinePage.tsx
import React from 'react';
import TicTacToeGame from '../components/TicTacToeGame'; // Assuming you have a TicTacToeGame component

const OnlinePage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <h1>Online Mode</h1>
      <TicTacToeGame />
    </div>
  );
};

const pageStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '50px',
};

export default OnlinePage;
