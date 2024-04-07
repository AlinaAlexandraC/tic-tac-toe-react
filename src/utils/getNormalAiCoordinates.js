import { easyWinOrEasyLose } from "./easyWinOrEasyLose";

function getNormalAiCoordinates(board, occupy, gameTurn, playerAI, player1) {
    if (gameTurn === 1) {
        extraMoves(board, occupy);
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