// src/pages/AgainstBotPage.tsx
import React from 'react';
import TicTacToeGame from '../components/TicTacToeGame'; // Assuming you have a TicTacToeGame component

const AgainstBotPage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <h1>Against Bot</h1>
      <TicTacToeGame />
    </div>
  );
};

const pageStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '50px',
};

export default AgainstBotPage;
