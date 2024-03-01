import { axiosApi } from '../../helper/axios'
// Create
export const handleSubmit = async (e, user, userApi) => {
    e.preventDefault();
    if (!user.email || !user.password) {
        return console.log("Please fill in all fields.");
    } else {
        await axiosApi.local.post('/users/login',
            { email: user.email, password: user.password }, { withCredentials: true })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        e.target.reset();
    }
};
