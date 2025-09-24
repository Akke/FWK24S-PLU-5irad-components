import style from './StartNewGame.module.css'
import CreateNewGameButton from '../CreateNewGameButton/CreateNewGameButton'

const StartNewGame = ({ onRedirect }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Joining new lobby')
    }
    return(
        <div className={style.createNewGameContainer}>
            <form onSubmit={(e)=>handleSubmit(e)} className={style.createNewGameForm}>
                <input className={style.createNewGameInput}type='text' placeholder='Game Lobby ID'/>
                <button className={style.joinGameButton} type='submit'>Join</button>
            </form>
            <div className={style.newGameButton}>
                <CreateNewGameButton onRedirect={onRedirect} />
            </div>
        </div>
    )
}
export default StartNewGame