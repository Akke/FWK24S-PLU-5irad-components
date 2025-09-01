import { useState } from "react";
import "./PlayerTurn.css";

const PlayerTurn = ({ username = "Player X" }) => {
    const [isOpponent, setIsOpponent] = useState(false);

    return (
        <div className={`player-turn ${isOpponent ? "opponent" : ""}`}>
            <div className="player-name">{username}</div>
            <div className="description">Make your move</div>
        </div>
    );
}

export default PlayerTurn;