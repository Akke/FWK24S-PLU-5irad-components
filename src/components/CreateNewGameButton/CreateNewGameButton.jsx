import style from './CreateNewGameButton.module.css'
import { useBoard } from "@akkelw/5irad-board-ctx";

const CreateNewGameButton = ({ onRedirect }) => {
    const { createBoard } = useBoard();

    const handleStartGame = async () =>{
        const gameId = await createBoard();

        if (onRedirect) onRedirect(`/game/${gameId}`);
    }
    
    return (
        <>
            <button className={style.createButton} onClick={handleStartGame}>Create New Game</button>
        </>
    )
}

export default CreateNewGameButton