import React, { useState } from "react";
import "./Board.css";
import Square from "./Square";

const Board = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, idx) => {
        if (idx === square && val === "") {
          return player;
        }
        return val;
      })
    );
    setPlayer(player === "X" ? "O" : "X");
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
            chooseSquare(0);
          }}
        />
        <Square
          value={board[4]}
          chooseSquare={() => {
            chooseSquare(1);
          }}
        />
        <Square
          value={board[5]}
          chooseSquare={() => {
            chooseSquare(2);
          }}
        />
      </div>
      <div className="row">
        <Square
          value={board[6]}
          chooseSquare={() => {
            chooseSquare(0);
          }}
        />
        <Square
          value={board[7]}
          chooseSquare={() => {
            chooseSquare(1);
          }}
        />
        <Square
          value={board[8]}
          chooseSquare={() => {
            chooseSquare(2);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
