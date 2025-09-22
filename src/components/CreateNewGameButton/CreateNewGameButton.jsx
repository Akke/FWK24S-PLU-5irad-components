import { useContext } from 'react';
import style from './CreateNewGameButton.module.css'
import { BoardContext } from '../../../../FWK24S-PLU-fem-i-rad-frontend/src/providers/BoardProvider';

const CreateNewGameButton = ({ useApi }) => {
    const { createBoard } = useContext(BoardContext);

    const handleStartGame = () =>{
        createBoard();
    }
    
    return (
        <>
            <button className={style.createButton} onClick={handleStartGame}>Create New Game</button>
        </>
    )
}

export default CreateNewGameButton