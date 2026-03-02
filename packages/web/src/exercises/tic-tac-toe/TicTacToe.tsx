import { ExerciseShell } from "../../components/ExerciseShell";
import { useState } from "react"
// GOAL: Build a complete tic-tac-toe game
// ACCEPTANCE CRITERIA:
// - 3x3 grid of clickable squares
// - Alternating X and O turns
// - Win detection (rows, columns, diagonals)
// - Draw detection
// - Game status display (whose turn, winner, draw)
// - Reset button

export default function TicTacToe() {
  const [board, setBoard] = useState(new Array(9).fill(" "))
  const [firstPlayer, setFirstPlayer] = useState(true);
  const [listX, setListX] = useState([]);
  const [winner, setWinner] = useState("")

 function findWinner(newIndices, winner) {
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

    const winnerSet = new Set(newIndices);

    for (const line of lines) {
      if (line.every(index => winnerSet.has(index))) {
        setWinner(winner)
      }
    }

    return null;
  }

  function findO(nextBoard: any[]) {
    const newO = nextBoard.map((square: string, index: any) =>
      square === "O" ? index : undefined)
      .filter((index: undefined) => index !== undefined)

    setListX(newO);
    findWinner(newO, "O")
  }


  function findX(nextBoard: any[]) {
    const newX = nextBoard.map((square: string, index: any) =>
      square === "X" ? index : undefined)
      .filter((index: undefined) => index !== undefined)

    setListX(newX);
    findWinner(newX, "X")
  }

  function handleMark(i: number) {
    const mark = firstPlayer ? "X" : "O";
    const nextBoard = board.map((square, index) => {
      if (i === index) {
        return square.replace(" ", mark)
      } else {
        return square;
      }
    })

    setBoard(nextBoard)
    setFirstPlayer(!firstPlayer);
    findX(nextBoard)
    findO(nextBoard);
  }

  return (
    <ExerciseShell
      title="Tic-Tac-Toe"
      description="Build a complete tic-tac-toe game with win detection."
    >
      <div>
        {winner && <p>Winner {winner}</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {board.map((element, index) => {
          if (index > 2) {
            return;
          }
          return (
            <div
              key={`square-${index}`}
              onClick={() => handleMark(index)}
              style={{ height: 200, width: 200, border: "3px purple solid", display: "flex", flexDirection: "row" }}>
              {element}
            </div>
          )
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {board.map((element, index) => {
          if (index < 3 || index > 5) {
            return;
          }
          return (
            <div
              key={`square-${index}`}
              onClick={() => handleMark(index)}
              style={{ height: 200, width: 200, border: "3px purple solid" }}>
              {element}
            </div>
          )
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {board.map((element, index) => {
          if (index < 6) {
            return;
          }
          return (
            <div
              key={`square-${index}`}
              onClick={() => handleMark(index)}
              style={{ height: 200, width: 200, border: "3px purple solid", display: "flex", flexDirection: "row" }}>
              {element}
            </div>
          )
        })}
      </div>
    </ExerciseShell>
  );
}
