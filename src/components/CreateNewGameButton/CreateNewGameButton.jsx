import style from './CreateNewGameButton.module.css'

const CreatNewGameButton = () => {
    const handleStartGame = () =>{
        console.log('start game')
    }
    return (
        <>
            <button className={style.createButton} onClick={handleStartGame}>Create New Game</button>
        </>
    )
}

export default CreatNewGameButton