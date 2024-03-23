import { useNavigate  } from 'react-router-dom';
import './ShowRules.css';

const ShowRules = () => {
    const navigate = useNavigate();

    return (
        <div className="game-rules d-flex flex-column align-items-center p-5 rounded bg-white shadow mt-5">
            <h1 className='mb-5'>Tic-Tac-Toe Rules</h1>
            <p>
                The game is played on a grid that's 3 squares by 3 squares.
            </p>
            <p>
                You are X , your friend or the computer is O.
            </p>
            <p>
                Players take turns putting their marks in empty squares. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
            </p>
                <button onClick={() => navigate(-1)} className="btn-hero btn text-center mt-5">Back</button>
        </div>
    );
};

export default ShowRules;