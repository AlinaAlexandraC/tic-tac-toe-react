function getNormalAiCoordinates(board, occupy) {
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

export {
    getNormalAiCoordinates
};