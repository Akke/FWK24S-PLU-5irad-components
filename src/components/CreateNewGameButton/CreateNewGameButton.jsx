import style from './CreateNewGameButton.module.css'

const CreateNewGameButton = ({ useApi }) => {
    const { createGame } = useApi();

    const handleStartGame = () =>{
        createGame();
    }
    
    return (
        <>
            <button className={style.createButton} onClick={handleStartGame}>Create New Game</button>
        </>
    )
}

export default CreateNewGameButton