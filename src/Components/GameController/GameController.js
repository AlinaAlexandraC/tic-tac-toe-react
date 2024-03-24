import './GameController.css';
import Swal from 'sweetalert2';

const GameController = ({ gameStatus, resetGame }) => {
    if (gameStatus.isWin) {
        if (gameStatus.playerIdRound !== 'tie') {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-danger",
                    cancelButton: "btn btn-success"
                },
            });
            swalWithBootstrapButtons.fire({
                title: "Congratulations!",
                text: `Player ${gameStatus.playerIdRound} has won!`,
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Play again?",
                cancelButtonText: "Return to Main Menu"
            }).then((result) => {
                if (result.isConfirmed) {
                    resetGame();
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    window.location.href = '/';
                }
            });
        }
        else {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-danger",
                    cancelButton: "btn btn-success"
                },
            });
            swalWithBootstrapButtons.fire({
                title: "Match even!",
                text: `No one has won!`,
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Play again?",
                cancelButtonText: "Return to Main Menu"
            }).then((result) => {
                if (result.isConfirmed) {
                    resetGame();
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    window.location.href = '/';
                }
            });
        }
    }

    return (
        <div className='bg-primary d-flex justify-content-center mx-3 px-5 py-5 align-items-center text-nowrap rounded shadow text-white game-controller'>
            {gameStatus.isWin && gameStatus.playerIdRound !== 'tie' &&
                <h2 className="text-hero">Player {gameStatus.playerIdRound} has won!</h2>
            }
            {gameStatus.playerIdRound !== 'tie' && !gameStatus.isWin &&
                <h2 className='text-hero'>Player {gameStatus.playerIdRound + 1}'s Turn</h2>
            }
            {gameStatus.playerIdRound === 'tie' && 
                <h2 className='text-hero'>It's a Tie</h2>
            }
        </div>
    );
};

export default GameController;