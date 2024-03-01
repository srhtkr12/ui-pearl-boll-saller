import { axiosApi } from './axios';
import Cookies from 'js-cookie';

export const AuthService = {
    setToken: (token) => {
        axiosApi.local.interceptors.request.use((configured) => {
            if (token) {
                configured.headers.Authorization = `Bearer ${token}`;
            }
            return configured;
        }, error => {
            return Promise.reject(error);
        });
    },
    logout: () => {

        console.log('mdsfsfa')
        axiosApi.defaults.headers.common['Authorization'] = undefined;

        // delete axiosApi.defaults.headers.common['Authorization'];
        Cookies.remove('token');
    },

    isAuthenticated: () => {
        return !!Cookies.get('token');
    },
};

// export const AuthService = {
//     setToken: async (token) => {
//         await axiosApi.interceptors.request.use((configured) => {
//             if (token) {
//                 configured.headers.Authorization = `Bearer ${token}`;
//             }
//             return configured;
//         }, (error) => {
//             return Promise.reject(error);
//         });
//     },
//     logout: async () => {
//         try {
//             await axiosApi.post('/logout');
//         } catch (error) {
//             console.log('error', error)
//         } finally {
//             delete axiosApi.defaults.headers.common['Authorization'];
//             Cookies.remove('token');
//         }
//     },
//     isAuthenticated: () => {
//         return !!Cookies.get('token');
//     },
// };
