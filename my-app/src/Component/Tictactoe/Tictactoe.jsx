import { useState } from "react";
import "./Tictactoe.css";

export const Tictactoe = ({ size = 3 }) => {
  const [board, setBoard] = useState(
    Array.from({ length: size }, () => Array(size).fill(0))
  );


  return (
    <div className="tictactoe-container">
      <div
        className="board-container"
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <div key={`${rowIndex}-${cellIndex}`} className="tictac-toe-cell">
              {cell}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
