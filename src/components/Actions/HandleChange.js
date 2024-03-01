export const handleChange = (e, user, setUser) => {
    setUser({ ...user, [e.target.name]: e.target.value })
}