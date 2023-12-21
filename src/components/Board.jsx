import React, { useState, useEffect } from "react";
import "./Board.css";
import Square from "./Square";
import { Patterns } from "./Patterns";

const Board = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });

  useEffect(() => {
    if (result.state !== "none") {
      alert(`Game Finished! Winning Player: ${result.winner}`);
      resetGame();
    }
  }, [result]);

  useEffect(() => {
    checkForWinner();
    checkIfTie();
    if (player === "X") {
      setPlayer("X");
    } else {
      setPlayer("O");
    }
  }, [board]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => (idx === square && val === "" ? player : val))
    );
    setPlayer(player === "X" ? "O" : "X");
  };

  const checkForWinner = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: firstPlayer, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult ({ winner: "No One", state: "Tie" });
    }
  };

  const resetGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
  };

  return (
    <div className="board">
      <div className="row">
        <Square
          value={board[0]}
          chooseSquare={() => {
            chooseSquare(0);
          }}
        />
        <Square
          value={board[1]}
          chooseSquare={() => {
            chooseSquare(1);
          }}
        />
        <Square
          value={board[2]}
          chooseSquare={() => {
            chooseSquare(2);
          }}
        />
      </div>
      <div className="row">
        <Square
          value={board[3]}
          chooseSquare={() => {
            chooseSquare(3);
          }}
        />
        <Square
          value={board[4]}
          chooseSquare={() => {
            chooseSquare(4);
          }}
        />
        <Square
          value={board[5]}
          chooseSquare={() => {
            chooseSquare(5);
          }}
        />
      </div>
      <div className="row">
        <Square
          value={board[6]}
          chooseSquare={() => {
            chooseSquare(6);
          }}
        />
        <Square
          value={board[7]}
          chooseSquare={() => {
            chooseSquare(7);
          }}
        />
        <Square
          value={board[8]}
          chooseSquare={() => {
            chooseSquare(8);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
