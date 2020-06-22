import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../../modules/home/home';
import authService from "../services/auth.service";
import modules from '../../modules/modules';

const routes: any[] = [
    {
        path: '/',
        component: Home
    }
];

routes.push(...modules.routes);

export default class Router extends React.Component {

    state = {
        user: {
            userName: '',
            role: 'user'
        }
    };

    componentDidMount() {
        let user = authService.getCurrentUser();
        this.setState({
            user: user
        })
    }

    render() {
        return (
            <>
                <Suspense fallback={<h3>loading.......</h3>}>
                    {routes.map((item, i) => {
                        if (item.rols)
                            return <ProtectedRoute path={item.path} component={item.component} key={i} auth={item.roles.includes(this.state.user?.role)} />
                        else
                            return <Route exact path={item.path} component={item.component} key={i} />
                    })}
                </Suspense>
            </>
        );
    }
}

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
    return (
        <Route {...rest} render={(props) => {
            if (rest.auth)
                return <Component {...props} />
            else
                return <Redirect to='/unauthorized' />
        }} />
    );
}