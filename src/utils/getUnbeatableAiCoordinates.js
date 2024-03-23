function getUnbeatableAiCoordinates(player1, playerAI, board, gameTurn, occupy) {
    if (gameTurn === 1 && board[0][0] === 0) {
        occupy(0, 0);
    } else if (gameTurn === 1 && board[0][0] !== 0) {
        extraMoves(board, occupy);
    }

    if (gameTurn === 3 && checkOppositeCorners(board, occupy)) {
        console.log('corners');
    } else if (gameTurn === 1 && board[0][0] !== 0) {
        extraMoves(board, occupy);
    }

    if (gameTurn > 4) {
        if (easyWinOrEasyLose(playerAI, board, occupy)) {
            easyWinOrEasyLose(playerAI, board, occupy);
            console.log('AI win');
        } else if (easyWinOrEasyLose(player1, board, occupy)) {
            console.log('AI blocked winning move');
        } else {
            extraMoves(board, occupy);
            console.log('extra');
        }
    }
};

function easyWinOrEasyLose(playerToCheck, board, occupy) {
    console.log('easy');
    for (let i = 0; i < board[0].length; i++) {
        console.log(board[i][0], board[i][1], board[i][2], playerToCheck.id + 1);
        // columns
        if (board[i][0] === board[i][1] && board[i][1] === playerToCheck.id + 1 && board[i][2] === 0) {
            occupy(i, 2);
            console.log("columns"); 
            return true;
        }
        // rows
        else if (board[0][i] === board[1][i] && board[1][i] === playerToCheck.id + 1 && board[2][i] === 0) {
            occupy(2, i);
            console.log("rows");
            return true;
        }
        // skipped columns
        else if (board[i][1] === board[i][2] && board[i][2] === playerToCheck.id + 1 && board[i][0] === 0) {
            occupy(i, 0);
            console.log("skipped columns");
            return true;
        }
        // skipped rows
        else if (board[1][i] === board[2][i] && board[2][i] === playerToCheck.id + 1 && board[0][i] === 0) {
            occupy(0, i);
            console.log("skipped rows");
            return true;
        }
        // columns from bottom to top
        else if (board[i][0] === board[i][2] && board[i][2] === playerToCheck.id + 1 && board[i][1] === 0) {
            occupy(i, 1);
            console.log('columns from bottom to top');
            return true;
        }
        // rows from right to left
        else if (board[0][i] === board[2][i] && board[2][i] === playerToCheck.id + 1 && board[1][i] === 0) {
            occupy(1, i);
            console.log('rows from right to left');
            return true;
        }
        // diagonals
        else if (board[0][2] === board[2][0] && board[2][0] === playerToCheck.id + 1 && board[1][1] === 0) {
            occupy(1, 1);
            console.log('diagonals11');
            return true;
        }
        else if (board[0][2] === board[1][1] && board[1][1] === playerToCheck.id + 1 && board[2][0] === 0) {
            occupy(2, 0);
            console.log('diagonals20');
            return true;
        }
        else if (board[2][0] === board[1][1] && board[1][1] === playerToCheck.id + 1 && board[0][2] === 0) {
            occupy(0, 2);
            console.log('diagonals02');
            return true;
        }
        else if (board[0][0] === board[1][1] && board[1][1] === playerToCheck.id + 1 && board[2][2] === 0) {
            occupy(2, 2);
            console.log('diagonals22');
            return true;
        }
        else if (board[0][0] === board[2][2] && board[2][2] === playerToCheck.id + 1 && board[1][1] === 0) {
            occupy(1, 1);
            console.log('diagonals112');
            return true;
        }
        else if (board[1][1] === board[2][2] && board[2][2] === playerToCheck.id + 1 && board[0][0] === 0) {
            occupy(0, 0);
            console.log('diagonals00');
            return true;
        }
    }

    return false;
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

function checkOppositeCorners(board, occupy) {
    if (board[0][0] === 1 && board[2][2] === 1) {
        occupy(1, 0);
    }
    if (board[0][2] === 1 && board[2][0] === 1) {
        occupy(1, 2);
    }
}

export {
    getUnbeatableAiCoordinates,
    easyWinOrEasyLose,
    extraMoves,
    checkOppositeCorners
};