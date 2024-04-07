import { easyWinOrEasyLose } from "./easyWinOrEasyLose";

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