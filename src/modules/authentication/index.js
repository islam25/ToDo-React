import Login from '../authentication/login/login';
import UnAuthorized from '../authentication/unauthorized/unauthorized';
import LogoutModal from '../authentication/logout/logout';

export default {
    routes:[
        {
            path: '/login',
            component: Login
        },
        {
            path: '/unauthorized',
            component: UnAuthorized
        },
        {
            path: '/logout',
            component: LogoutModal,
            roles: ['admin' , 'user']
        }
    ],
    name: 'authentication module'
};