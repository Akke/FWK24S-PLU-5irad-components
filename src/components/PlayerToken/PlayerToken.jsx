import "./PlayerToken.css";

const PlayerToken = ({ color }) => {
    return (
        <div className="player-token" style={{ color: color }}></div>
    );
}

export default PlayerToken;