import { useContext } from 'react';
import style from './CreateNewGameButton.module.css'
import { BoardContext } from '../../../../FWK24S-PLU-fem-i-rad-frontend/src/providers/BoardProvider';

const CreateNewGameButton = ({ onRedirect }) => {
    const { createBoard } = useContext(BoardContext);

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