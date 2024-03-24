function getNormalAiCoordinates(board, occupy, gameTurn, playerAI, player1) {
    if (gameTurn === 1) {
        extraMoves(board, occupy);
        console.log('extraMoves', gameTurn);
    }
    if (gameTurn >= 3) {
        if (easyWinOrEasyLose(playerAI, board, occupy, 'check')) {
            easyWinOrEasyLose(playerAI, board, occupy);
        } else if (easyWinOrEasyLose(player1, board, occupy, 'check')) {
            easyWinOrEasyLose(player1, board, occupy);
        } else {
            extraMoves(board, occupy);
        }
    }
}

function easyWinOrEasyLose(playerToCheck, board, occupy, type = 'action') {
    let x, y;
    for (let i = 0; i < board[0].length; i++) {
        // columns
        if (board[i][0] === board[i][1] && board[i][1] === playerToCheck.id + 1 && board[i][2] === 0) {
            x = i;
            y = 2;
        }
        // rows
        else if (board[0][i] === board[1][i] && board[1][i] === playerToCheck.id + 1 && board[2][i] === 0) {
            x = 2;
            y = i;
        }
        // skipped columns
        else if (board[i][1] === board[i][2] && board[i][2] === playerToCheck.id + 1 && board[i][0] === 0) {
            x = i;
            y = 0;
        }
        // skipped rows
        else if (board[1][i] === board[2][i] && board[2][i] === playerToCheck.id + 1 && board[0][i] === 0) {
            x = 0;
            y = i;
        }
        // columns from bottom to top
        else if (board[i][0] === board[i][2] && board[i][2] === playerToCheck.id + 1 && board[i][1] === 0) {
            x = i;
            y = 1;
        }
        // rows from right to left
        else if (board[0][i] === board[2][i] && board[2][i] === playerToCheck.id + 1 && board[1][i] === 0) {
            x = 1;
            y = i;
        }
        // diagonals
        else if (board[0][2] === board[2][0] && board[2][0] === playerToCheck.id + 1 && board[1][1] === 0) {
            x = 1;
            y = 1;
        }
        else if (board[0][2] === board[1][1] && board[1][1] === playerToCheck.id + 1 && board[2][0] === 0) {
            x = 2;
            y = 0;
        }
        else if (board[2][0] === board[1][1] && board[1][1] === playerToCheck.id + 1 && board[0][2] === 0) {
            x = 0;
            y = 2;
        }
        else if (board[0][0] === board[1][1] && board[1][1] === playerToCheck.id + 1 && board[2][2] === 0) {
            x = 2;
            y = 2;
        }
        else if (board[0][0] === board[2][2] && board[2][2] === playerToCheck.id + 1 && board[1][1] === 0) {
            x = 1;
            y = 1;
        }
        else if (board[1][1] === board[2][2] && board[2][2] === playerToCheck.id + 1 && board[0][0] === 0) {
            x = 0;
            y = 0;
        }
    }
    if (x !== undefined && y !== undefined) {
        if (type === 'action') {
            occupy(x, y);
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function extraMoves(board, occupy) {
    let x, y;

    x = Math.floor(Math.random() * 3);
    y = Math.floor(Math.random() * 3);

    if (board[x][y] !== 0) {
        extraMoves(board, occupy);
    } else {
        occupy(x, y);
    }
}

export {
    getNormalAiCoordinates
};