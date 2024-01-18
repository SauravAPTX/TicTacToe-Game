// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div style={pageStyle}>
      <h1>Welcome to Tic-Tac-Toe!</h1>
      <div style={linkContainerStyle}>
        <Link to="/passnplay" style={linkStyle}>Pass and Play</Link>
        <Link to="/online" style={linkStyle}>Online</Link>
        <Link to="/room" style={linkStyle}>Room with Code</Link>
        <Link to="/againstbot" style={linkStyle}>Against Bot</Link>
      </div>
    </div>
  );
};

const pageStyle: React.CSSProperties = {
  textAlign: 'center',
  marginTop: '50px',
};

const linkContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
};

const linkStyle: React.CSSProperties = {
  fontSize: '20px',
  textDecoration: 'none',
  color: '#333',
  padding: '10px',
  margin: '10px',
  border: '2px solid #ccc',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default HomePage;
