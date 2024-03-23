function getNormalAiCoordinates(player1, playerAI, board, gameTurn, occupy) {
    if (gameTurn === 1 && oppositeCorners(oppositeC, board, occupy) === true) {
        if (board[1][1] === 0) {
            occupy(1, 1);
        }
    }
    if (gameTurn < 4 && gameTurn !== 1 && oppositeCorners(oppositeC, board, occupy) === true) {
        oppositeCorners(oppositeC, board, occupy);
    } else if (easyWinOrEasyLose(playerAI, easyWin, board, occupy) === true) {
        easyWinOrEasyLose(playerAI, easyWin, board, occupy);
    } else if (easyWinOrEasyLose(playerAI, easyWin, board, occupy) === false && easyWinOrEasyLose(player1, easyLose, board, occupy) === true) {
        easyWinOrEasyLose(player1, easyLose, board, occupy);
    }
    else {
        extraMoves(board, occupy);
    }
};

let easyWin = false;
let easyLose = false;
function easyWinOrEasyLose(playerToCheck, param, board, occupy) {
    for (let i = 0; i < board[0].length; i++) {
        // columns
        if (board[i][0] === board[i][1] && board[i][1] === playerToCheck && board[i][2] === 0) {
            occupy(i, 2);
            param = true;
            break;
        }
        // rows
        if (board[0][i] === board[1][i] && board[1][i] === playerToCheck && board[2][i] === 0) {
            occupy(2, i);
            param = true;
            break;
        }
        // skipped columns
        if (board[i][1] === board[i][2] && board[i][2] === playerToCheck && board[i][0] === 0) {
            occupy(i, 0);
            param = true;
            break;
        }
        // skipped rows
        if (board[1][i] === board[2][i] && board[2][i] === playerToCheck && board[0][i] === 0) {
            occupy(0, i);
            param = true;
            break;
        }
        // columns from bottom to top
        if (board[i][0] === board[i][2] && board[i][2] === playerToCheck && board[i][1] === 0) {
            occupy(i, 1);
            param = true;
            break;
        }
        // rows from right to left
        if (board[0][i] === board[2][i] && board[2][i] === playerToCheck && board[1][i] === 0) {
            occupy(1, i);
            param = true;
            break;
        }
        // diagonals
        if (board[0][2] === board[2][0] && board[2][0] === playerToCheck && board[1][1] === 0) {
            occupy(1, 1);
            param = true;
            break;
        }
        if (board[0][2] === board[1][1] && board[1][1] === playerToCheck && board[2][0] === 0) {
            occupy(2, 0);
            param = true;
            break;
        }
        if (board[2][0] === board[1][1] && board[1][1] === playerToCheck && board[0][2] === 0) {
            occupy(0, 2);
            param = true;
            break;
        }
        if (board[0][0] === board[1][1] && board[1][1] === playerToCheck && board[2][2] === 0) {
            occupy(2, 2);
            param = true;
            break;
        }
        if (board[0][0] === board[2][2] && board[2][2] === playerToCheck && board[1][1] === 0) {
            occupy(1, 1);
            param = true;
            break;
        }
        if (board[1][1] === board[2][2] && board[2][2] === playerToCheck && board[0][0] === 0) {
            occupy(0, 0);
            param = true;
            break;
        }
    }
    return param;
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

let oppositeC = false;
function oppositeCorners(param, board, occupy) {
    if (board[0][0] === 1 && board[2][2] === 1) {
        occupy(1, 0);
        param = true;
    }
    if (board[0][2] === 1 && board[2][0] === 1) {
        occupy(1, 2);
        param = true;
    }
    return param;
}

export {
    getNormalAiCoordinates,
    easyWinOrEasyLose,
    extraMoves,
    oppositeCorners
};