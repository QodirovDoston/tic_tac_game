import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="m-[30px]">
      {isWinner ? (
        <>
        <div className="flex justify-center">
         <p className="text-[30px] text-red-500 mx-2 h-16"> {isWinner}</p> <p className="text-[30px]"> won the game{" "}</p>
        </div>
          <button className="bg-light-400 border-4 border-gray-300 text-[30px] ml-[850px]" onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h4 className="mb-[40px] text-[30px] text-gray-600 flex justify-center"> Player: {isXTurn ? <p className="text-red-400 text-[30px] mx-2">  X </p> : <p className="text-red-400 text-[30px] mx-2"> 0 </p>}  please move</h4>
          <div className="items-center  flex justify-center text-gray-500 text-[100px]">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className=" items-center  flex justify-center text-gray-500 text-[100px] ">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className=" items-center  flex justify-center text-gray-500 text-[100px] ">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
