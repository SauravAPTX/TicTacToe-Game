// src/components/Board.tsx
import React from 'react';

interface BoardProps {
  squares: (string | null)[];
  onClick: (index: number) => void;
}

const Square: React.FC<{ value: string | null; onClick: () => void }> = ({ value, onClick }) => (
  <button style={squareStyle} onClick={onClick}>
    {value}
  </button>
);

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i: number) => (
    <Square value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div style={boardStyle}>
      <div style={rowStyle}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div style={rowStyle}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div style={rowStyle}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const boardStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 100px)',
  gridGap: '5px',
};

const rowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
};

const squareStyle: React.CSSProperties = {
  width: '100px',
  height: '100px',
  fontSize: '24px',
  border: '1px solid #ccc',
  cursor: 'pointer',
  outline: 'none',
};

export default Board;
