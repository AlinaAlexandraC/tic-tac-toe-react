function getUnbeatableAiCoordinates(player1, playerAI, board, gameTurn, occupy) {
    if (gameTurn === 1 && board[1][1] === 0) {
        occupy(1, 1);
    } else if (gameTurn === 1 && board[1][1] !== 0) {
        extraMoves(board, occupy);
    }

    if (gameTurn < 4 && gameTurn !== 1 && !checkOppositeCorners(board, occupy, 'check')) {
        if (!easyWinOrEasyLose(player1, board, occupy, 'check')) {   
            extraMoves(board, occupy);
        } else {
            easyWinOrEasyLose(player1, board, occupy);
        }
    } else if (gameTurn < 4) {
        checkOppositeCorners(board, occupy);
    }

    if (gameTurn > 4) {
        if (easyWinOrEasyLose(playerAI, board, occupy, 'check')) {
            easyWinOrEasyLose(playerAI, board, occupy);
        } else if (easyWinOrEasyLose(player1, board, occupy, 'check')) {
            easyWinOrEasyLose(player1, board, occupy);
        } else {
            extraMoves(board, occupy);
        }
    }
};

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
    // center
    if (board[1][1] === 0) { occupy(1, 1); }
    // corners
    else if (board[0][2] === 0) { occupy(0, 2); }
    else if (board[2][2] === 0) { occupy(2, 2); }
    else if (board[2][0] === 0) { occupy(2, 0); }
    else if (board[0][0] === 0) { occupy(0, 0); }
    // edges
    else if (board[1][0] === 0) { occupy(1, 0); }
    else if (board[0][1] === 0) { occupy(0, 1); }
    else if (board[1][2] === 0) { occupy(1, 2); }
    else if (board[2][1] === 0) { occupy(2, 1); }
}

function checkOppositeCorners(board, occupy, type = 'action') {
    if (board[0][0] === 1 && board[2][2] === 1) {
        if (type === 'action') {            
            occupy(1, 0);
        } else {
            return true;
        }
    }
    if (board[0][2] === 1 && board[2][0] === 1) {
        if (type === 'action') {            
            occupy(1, 2);
        } else {
            return true;
        }
    }

    return false;
}

export {
    getUnbeatableAiCoordinates
};