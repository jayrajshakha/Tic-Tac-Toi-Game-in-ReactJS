import React from "react";
import Square from "./Square";
import "./Bord.css";
import { useState } from "react";

function Bord() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  function checkWinner() {
    const winningLogics = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [0, 2, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const logic of winningLogics) {
      const [a, b, c] = logic;

      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
    return false;
  }

  const isCheckWinner = checkWinner();

  function handlerClick(index) {
    if (state[index] !== null) {
      return state[index];
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  }
  function reset() {
    setState(Array(9).fill(null));
  }

  return (
    <div className="bord">
      <h1 className="header">Tic Tac Toe Game</h1>
      {isCheckWinner ? (
        <>
          <h1>{isCheckWinner} Win </h1>{" "}
        </>
      ) : (
        <>
          <h3>Player{isXTurn ? " X " : " O "}please Move</h3>
          <div className="div">
            <Square clk={() => handlerClick(0)} value={state[0]} />
            <Square clk={() => handlerClick(1)} value={state[1]} />
            <Square clk={() => handlerClick(2)} value={state[2]} />
          </div>
          <div className="div">
            <Square clk={() => handlerClick(3)} value={state[3]} />
            <Square clk={() => handlerClick(4)} value={state[4]} />
            <Square clk={() => handlerClick(5)} value={state[5]} />
          </div>
          <div className="div">
            <Square clk={() => handlerClick(6)} value={state[6]} />
            <Square clk={() => handlerClick(7)} value={state[7]} />
            <Square clk={() => handlerClick(8)} value={state[8]} />
          </div>
        </>
      )}
      <button onClick={reset}> Replay </button>
    </div>
  );
}

export default Bord;
