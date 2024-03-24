import { useEffect, useState } from "react";
import InGameMenu from '../Components/InGameMenu/InGameMenu';
import PlayerCard from "../Components/PlayerCard/PlayerCard";
import Board from "../Components/Board/Board";
import GameController from '../Components/GameController/GameController';
import { getNormalAiCoordinates } from "../utils/getNormalAiCoordinates";
import { getWinningPlayer, checkGameCompleted } from "../utils/getWinningPlayer";
import playerOneImg from '../assets/moon-player.svg';
import playerTwoImg from '../assets/star-player.svg';

const GameMode2 = () => {
    const [board, setBoard] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);

    const [gameTurn, setGameTurn] = useState(0);
    const [gameStatus, setGameStatus] = useState({
        playerIdRound: 0,
        isWin: false
    });
    const [player1, setPlayer1] = useState({
        id: 0,
        name: 'Player 1',
        symbol: 'star',
        score: 0
    });
    const [playerAI, setPlayerAI] = useState({
        id: 1,
        name: 'Computer',
        symbol: 'dark_mode',
        score: 0
    });

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

    const occupy = (posY, posX) => {
        let newBoard = board;
        const cell = document.getElementById(`cell-${posY}-${posX}`);
        if (!checkGameCompleted(board, setGameStatus, gameTurn, setPlayer1, setPlayerAI, player1, playerAI)) {
            if (gameStatus.playerIdRound === 0 && board[posY][posX] === 0) {
                board[posY][posX] = 1;
                cell.innerHTML = `${player1.symbol}`;
                setGameStatus({ ...gameStatus, playerIdRound: 1 });
            } else if (gameStatus.playerIdRound === 1 && board[posY][posX] === 0) {
                board[posY][posX] = 2;
                cell.innerHTML = `${playerAI.symbol}`;
                setGameStatus({ ...gameStatus, playerIdRound: 0 });
            }
        } else {
            checkGameCompleted(board, setGameStatus, gameTurn, setPlayer1, setPlayerAI, player1, playerAI);
        }

        setBoard(newBoard);
        setGameTurn(gameTurn + 1);
        getWinningPlayer(board);
    };

    useEffect(() => {
        if (gameTurn % 2 !== 0 && gameStatus.isWin === false)
            getNormalAiCoordinates(board, occupy);
    }, [gameTurn]);

    return (
        <div className="game">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <InGameMenu />
            </div>
            <div className="game-panel d-flex flex-column flex-md-row align-items-center justify-content-center ">
                <PlayerCard player={player1} img={playerOneImg} />
                <Board board={board} occupy={occupy} />
                <PlayerCard player={playerAI} img={playerTwoImg} />
            </div>
            <div className="game-controller justify-content-center user-select-none d-flex align-items-center my-3">
                <GameController gameStatus={gameStatus} playerIdRound={gameStatus.playerIdRound} resetGame={resetGame} />
            </div>
        </div>
    );
};

export default GameMode2;