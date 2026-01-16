const { useState } = React;

export function Board() {

  const [gameEnd, setGameEnd] = useState(false);
  const [draw, setDraw] = useState(false);
  const [player, setPlayer] = useState("X");
  const [values, setValues] = useState(Array(9).fill(""));

  const handleClick = (_, index) => {
    if (values[index] || gameEnd) {
      return;
    }

    const nextValues = values.map((value, i) =>
      i === index ? player : value
    );

    const winner = calculateWinner(nextValues);
    const drawNow = !winner && isDraw(nextValues);

    setValues(nextValues);
    setGameEnd(!!winner || drawNow);
    setDraw(drawNow);

    if (!winner && !drawNow) {
      changeTurnSequence();
    }
  };

  function resetGame() {
    setValues(Array(9).fill(""));
    setGameEnd(false);
    setDraw(false);
    setPlayer("X");
  };

  function changeTurnSequence(){
    setPlayer( player === "X" ? "O" : "X" );
  };

  const makeButtons = () => {
    const rows = [];

    for (let row = 0; row < 3; row++) {
      const buttons = [];
      
      for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;

        buttons.push(
          <button key={index} className="square" onClick={(e) => handleClick(e, index)}>{values[index]}</button>
        );
      }

    rows.push(
      <div key={row} className="board-row">
        {buttons}
      </div>
    );
    }

    return rows;
  };

  function calculateWinner(sq) {
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
      if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
        return sq[a]; // "X" or "O"
      }
    }
    return null;
  }

function isDraw(sq) {
  return sq.every((v) => v !== "") && !calculateWinner(sq);
}


  return(
    <div>
      <div className="squares">
        {makeButtons()}
      </div>
      <p>{
        draw ? 
          "It's a Draw!"
        : 
        gameEnd ? 
          "Winner: " + player
        : 
          "Next Player: " + player
      }</p>
      <button id="reset" onClick={resetGame} >reset</button>
    </div>
  );
}
