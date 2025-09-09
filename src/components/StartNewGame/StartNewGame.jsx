import style from './StartNewGame.module.css'
import CreateNewGameButton from '../CreateNewGameButton/CreateNewGameButton'

const StartNewGame = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Joining new lobby')
    }
    return(
        <div className={style.createNewGameContainer}>
            <h1 className={style.createGameHeader}>Start Game</h1>
            <form onSubmit={(e)=>handleSubmit(e)} className={style.createNewGameForm}>
                <input className={style.createNewGameInput}type='text' placeholder='Game Lobby ID'/>
                <button className={style.joinGameButton} type='submit'>Join</button>
            </form>
            <hr className={style.divider}/>
            <CreateNewGameButton/>
        </div>
    )
}
export default StartNewGame