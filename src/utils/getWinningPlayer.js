function getWinningPlayer(board) {
    // horizontal wins
    if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
        return board[0][0];
    }
    if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
        return board[1][0];
    }
    if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
        return board[2][0];
    }

    // diagonal wins
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
    }

    // vertical wins
    if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
        return board[0][0];
    }
    if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
        return board[0][1];
    }
    if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
        return board[0][2];
    }

    return 0;
}

const checkGameCompleted = (board, setGameStatus, gameTurn, setPlayer1, setPlayer2, player1, player2) => {
    let playerWon = undefined;
    if (getWinningPlayer(board) !== 0) {
        playerWon = getWinningPlayer(board);
        setGameStatus({ playerIdRound: playerWon, isWin: true });
        if (getWinningPlayer(board) === 1) {
            setPlayer1({ ...player1, score: player1.score + 1 });
        } else {
            setPlayer2({ ...player2, score: player2.score + 1 });
        }
        return true;
    } else if (getWinningPlayer(board) === 0 && gameTurn === 8) {
        playerWon = 'tie';
        setGameStatus({ playerIdRound: playerWon, isWin: true });
        return true;
    }
    return false;
};

export {
    getWinningPlayer,
    checkGameCompleted
};