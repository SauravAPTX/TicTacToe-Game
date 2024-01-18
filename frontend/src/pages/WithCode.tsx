// src/pages/RoomWithCodePage.tsx
import React from 'react';
import TicTacToeGame from '../components/TicTacToeGame'; // Assuming you have a TicTacToeGame component

const RoomWithCodePage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <h1>Room with Code</h1>
      <TicTacToeGame />
    </div>
  );
};

const pageStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '50px',
};

export default RoomWithCodePage;
