import React from 'react';
import { Link } from 'react-router-dom';
import authService from "../../../core/services/auth.service";
import Routes from '../../../core/router/router';

export default class Layout extends React.Component {
    state = {
        userName: '',
        isAdmin: false
    };

    componentDidMount() {
        let user = authService.getCurrentUser() as any;
        if(user)
            this.setState({
                userName: user.userName,
                isAdmin: user.role === 'admin' ? true : false
            })
    }

    render() {
        return (
            <>
                <div className='header'>
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">
                                    Home
                                </Link>
                            </li>
                            {this.state.userName !== '' && <li className="nav-item">
                                <Link to='/todos' className="nav-link">
                                    Show Todos
                                </Link>
                            </li>}
                            {this.state.isAdmin &&
                                <li className="nav-item">
                                    <Link to='/create' className="nav-link">
                                        Create New ToDo
                                </Link>
                                </li>
                            }
                        </div>
                        {
                            this.state.userName === '' ?
                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                            Login
                                    </Link>
                                    </li>
                                </div>
                                :
                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/logout" className="nav-link">
                                            LogOut
                                    </Link>
                                    </li>
                                </div>
                        }
                    </nav>
                </div>
                <div className='body'>
                    <Routes />
                </div>
                <div className='footer'></div>
            </>
        );
    }
}