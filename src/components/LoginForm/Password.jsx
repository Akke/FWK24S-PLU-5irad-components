const Password = ({ password, onChange }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        onChange(value);
    }

    return <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={handleChange}
    />
}

export default Password;