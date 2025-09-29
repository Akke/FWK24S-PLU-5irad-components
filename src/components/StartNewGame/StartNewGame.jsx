import style from './StartNewGame.module.css'
import CreateNewGameButton from '../CreateNewGameButton/CreateNewGameButton'
import { useBoard } from '@akkelw/5irad-board-ctx'
import { useState } from 'react'

const StartNewGame = ({ onRedirect }) => {
    const [gameId, setGameId] = useState(null);

    const { joinBoard } = useBoard();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const join = joinBoard(gameId);

        if(join) {
            onRedirect(`/game/${gameId}`);
        }
    }

    return(
        <div className={style.createNewGameContainer}>
            <form onSubmit={(e)=>handleSubmit(e)} className={style.createNewGameForm}>
                <input className={style.createNewGameInput} onChange={setGameId} type='text' placeholder='Game Lobby ID'/>
                <button className={style.joinGameButton} type='submit'>Join</button>
            </form>
            <div className={style.newGameButton}>
                <CreateNewGameButton onRedirect={onRedirect} />
            </div>
        </div>
    )
}
export default StartNewGame