const Username = ({ username, onBlur }) => {
    const handleBlur = (e) => {
        const value = e.target.value;
        onBlur(value);
    }

    return <input 
        type="text" 
        placeholder="Username" 
        value={username}
        onBlur={handleBlur}
    />
}

export default Username;