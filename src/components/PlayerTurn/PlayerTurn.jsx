import "./PlayerTurn.css";

const PlayerTurn = ({ username = "Player X" }) => {
    return (
        <div className="player-turn">
            <div className="player-name">{username}</div>
            <div className="description">Make your move</div>
        </div>
    );
}

export default PlayerTurn;