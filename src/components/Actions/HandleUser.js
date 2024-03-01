// User Login - Register
export const handleUser = async (e, user, userApi) => {
    e.preventDefault();

    if (!user) {
        return console.log("Please fill in all fields.");
    } else {
        await userApi(user).then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
        e.target.reset();
        console.log('user>>', user)
    }
};