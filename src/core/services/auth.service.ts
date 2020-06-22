import axios from 'axios';
class AuthService{
    readonly url: string = 'http://localhost:3030/api/';

    async login(userName: string, password: string){
        let response: any;
        try{
            response = await axios.post(this.url + 'auth/login' , {username: userName , password: password})
        }catch(err){
            return response;
        }
        response.data.user.role = 'admin';
        localStorage.setItem('user' ,JSON.stringify(response.data.user));
        localStorage.setItem('token' , response.data.accessToken.token);
        localStorage.setItem('refresh-token' , response.data.refreshToken);
        if(response.data.user)
            return new Promise((resolve) => resolve(response.data.user));
        return null;
    }

    logout(){
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('refresh-token')
    }

    getCurrentUser(){
        let user = localStorage.getItem('user');
        let result = user != null ? JSON.parse(user) : null;
        return result;
    }
    // register(){}
}

export default new AuthService();