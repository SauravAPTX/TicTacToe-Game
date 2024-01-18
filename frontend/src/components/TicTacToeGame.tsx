// src/components/TicTacToeGame.tsx
import React, { useState } from 'react';
import Board from './Board';

const calculateWinner = (squares: (string | null)[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const TicTacToeGame: React.FC = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentSquares = current.squares.slice();

    if (winner || currentSquares[i]) {
      return;
    }

    currentSquares[i] = xIsNext ? 'X' : 'O';

    setHistory([...newHistory, { squares: currentSquares }]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <div>
      <div style={gameInfoStyle}>
        <div>{winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`}</div>
        <ol>
          {history.map((_, move) => (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>
                {move === 0 ? 'Go to game start' : `Go to move #${move}`}
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div style={gameBoardStyle}>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
    </div>
  );
};

const gameInfoStyle: React.CSSProperties = {
  marginBottom: '20px',
};

const gameBoardStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
};

export default TicTacToeGame;
