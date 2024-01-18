// src/Game.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const calculateWinner = (squares: string[]): string | null => {
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

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Game: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [moves, setMoves] = useState<number>(0);
  const [limit, setLimit] = useState<number | null>(null);
  const [scores, setScores] = useState<{ X: number; O: number }>({ X: 0, O: 0 });
  const [gamesPlayed, setGamesPlayed] = useState<number>(0);

  useEffect(() => {
    axios.get('http://localhost:3001/game').then((response) => {
      setBoard(response.data.board);
      setIsXNext(response.data.isXNext);
      setWinner(response.data.winner);
      setMoves(response.data.moves);
      setLimit(response.data.limit);
      setScores(response.data.scores);
      setGamesPlayed(response.data.gamesPlayed);
    });
  }, []);

  const handleClick = (index: number) => {
    if (board[index] || winner || (limit && moves >= limit)) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
    setMoves(moves + 1);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      const newScores = { ...scores, [newWinner]: scores[newWinner] + 1 };
      setScores(newScores);
      setWinner(newWinner);

      if (!limit || gamesPlayed < limit) {
        axios.post('http://localhost:3001/newGame', { scores: newScores, gamesPlayed: gamesPlayed + 1 });
      }
    } else if (limit && moves + 1 === limit) {
      axios.post('http://localhost:3001/newGame', { scores, gamesPlayed: gamesPlayed + 1 });
    } else {
      axios.post('http://localhost:3001/move', { board: newBoard, isXNext: !isXNext, moves: moves + 1 });
    }
  };

  const handleReset = () => {
    const newBoard = Array(9).fill('');
    setBoard(newBoard);
    setIsXNext(true);
    setWinner(null);
    setMoves(0);

    axios.post('http://localhost:3001/reset', { board: newBoard, isXNext: true, moves: 0 });
  };

  const handleLimitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = parseInt(event.target.value, 10);
    setLimit(newLimit);
  };

  const renderSquare = (index: number) => (
    <button className="square" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const status = winner
    ? `Winner: ${winner}`
    : limit && gamesPlayed >= limit
    ? 'Game Over (Limit reached)'
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="scoreboard">
        <div className="score">
          <span>X: {scores.X}</span>
        </div>
        <div className="score">
          <span>O: {scores.O}</span>
        </div>
        <div className="round">
          <span>Round: {gamesPlayed + 1}</span>
        </div>
      </div>
      <div className="controls">
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
        <div className="limit-input">
          <label>Game Limit:</label>
          <input type="number" value={limit || ''} onChange={handleLimitChange} />
        </div>
      </div>
    </div>
  );
};

export default Game;
