import "./Board.css";

const Board = ({ board, occupy }) => {
  return (
    <div className="board-display bg-white mx-5 my-5">
      {board.map((row, indexY) => (
        <div key={indexY} className="row">
          {row.map((cell, index) => (
            <div
              key={index}
              onClick={() => occupy(indexY, index)}
              id={"cell-" + indexY + "-" + index}
              className={
                cell === 2
                  ? "cell col-2 border border-dark material-symbols-outlined"
                  : cell === 1
                  ? "cell col-2 border border-dark material-symbols-outlined"
                  : cell === 3
                  ? "cell col-2 border border-dark completed material-symbols-outlined"
                  : cell === 4
                  ? "cell col-2 border border-dark completed material-symbols-outlined"
                  : "cell col-2 border border-dark material-symbols-outlined"
              }
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
