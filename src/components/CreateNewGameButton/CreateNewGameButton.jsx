import style from './CreateNewGameButton.module.css'

const CreateNewGameButton = () => {
    const handleStartGame = () =>{
        console.log('start game')
    }
    return (
        <>
            <button className={style.createButton} onClick={handleStartGame}>Create New Game</button>
        </>
    )
}

export default CreateNewGameButton