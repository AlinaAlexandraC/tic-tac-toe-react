import { useEffect, useState } from "react";
import InGameMenu from '../Components/InGameMenu/InGameMenu';
import PlayerCard from "../Components/PlayerCard/PlayerCard";
import Board from "../Components/Board/Board";
import GameController from '../Components/GameController/GameController';
import { getWinningPlayer, checkGameCompleted } from "../utils/getWinningPlayer";
import playerOneImg from '../assets/moon-player.svg';
import playerTwoImg from '../assets/star-player.svg';

const GameMode1 = () => {
    const [board, setBoard] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);

    const [gameTurn, setGameTurn] = useState(0);
    const [gameStatus, setGameStatus] = useState({
        playerIdRound: 0,
        isWin: false,
    });
    const [player1, setPlayer1] = useState({
        id: 0,
        name: 'Player 1',
        symbol: 'star',
        score: 0
    });
    const [player2, setPlayer2] = useState({
        id: 1,
        name: 'Player 2',
        symbol: 'dark_mode',
        score: 0
    });

    const occupy = (posY, posX) => {
        let newBoard = board;
        const cell = document.getElementById(`cell-${posY}-${posX}`);
        if (gameStatus.playerIdRound === 0 && board[posY][posX] === 0) {
            board[posY][posX] = 1;
            cell.innerHTML = `${player1.symbol}`;
            setGameStatus({ ...gameStatus, playerIdRound: 1 });
        } else if (gameStatus.playerIdRound === 1 && board[posY][posX] === 0) {
            board[posY][posX] = 2;
            cell.innerHTML = `${player2.symbol}`;
            setGameStatus({ ...gameStatus, playerIdRound: 0 });
        }

        setBoard(newBoard);
        setGameTurn(gameTurn + 1);
        getWinningPlayer(board);
        checkGameCompleted(board, setGameStatus, gameTurn, setPlayer1, setPlayer2, player1, player2);
    };

    const resetGame = () => {
        let newBoard = board;
        for (let i = 0; i < newBoard.length; i++) {
            for (let j = 0; j < newBoard[i].length; j++) {
                const cell = document.getElementById(`cell-${i}-${j}`);
                cell.innerHTML = '';
                newBoard[i][j] = 0;
                setGameTurn(0);
                setGameStatus({ ...gameStatus, playerIdRound: 0, isWin: false });
            }
        }
    };

    return (
        <div className="game">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <InGameMenu />
            </div>
            <div className="game-panel d-flex flex-column flex-md-row align-items-center justify-content-center">
                <PlayerCard player={player1} img={playerOneImg} />
                <Board board={board} occupy={occupy} />
                <PlayerCard player={player2} img={playerTwoImg} />
            </div>
            <div className="game-controller justify-content-center user-select-none d-flex align-items-center my-3">
                <GameController gameStatus={gameStatus} resetGame={resetGame} />
            </div>
        </div>
    );
};

export default GameMode1;