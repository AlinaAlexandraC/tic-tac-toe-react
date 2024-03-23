import './PlayerCard.css';

const PlayerTwoCard = ({ img, player }) => {
    return ( 
        <div className="player-card bg-white shadow mx-3 px-5 py-5 rounded d-flex flex-column justify-content-center align-items-center">
            <img src={img} alt="" className="player-one-image my-3" />
            <p className="player-name">{player.name}</p>
            <p className="player-score">{player.score}</p>
        </div>
    );
}
 
export default PlayerTwoCard;