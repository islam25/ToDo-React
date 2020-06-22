import React from "react";
import authService from "../../../core/services/auth.service";

export default class Login extends React.Component {

    state = {
        userName: '',
        password: '',
        loading: false,
    };
    form: any;

    props: any;

    onUserNameChange = (event: any) => {
        this.setState({
            userName: event.target.value
        });
    }

    onPasswordChange = (event: any) => {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = (e: any) => {
        e.preventDefault();

        this.setState({
            loading: true
        });

        if (this.state.userName && this.state.password) {
            authService.login(this.state.userName, this.state.password)
                .then(res => {
                    if (res) {
                        this.props.history.push('/');
                        window.location.reload();
                    } else {
                        alert('username or password invalid')
                    }
                    this.setState({
                        loading: false
                    });
                })
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (
            <>
                <h3>Login</h3>
                <form
                    onSubmit={this.handleLogin}
                    ref={c => {
                        this.form = c;
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="userName">User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.onUserNameChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={this.state.password}
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            className="btn btn-primary btn-block"
                            disabled={this.state.loading}
                        >
                            {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                        </button>
                    </div>
                </form>
            </>
        );
    }
}