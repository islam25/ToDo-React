import React from 'react';
import authService from "../../core/services/auth.service";
import { Link } from 'react-router-dom';

class Home extends React.Component {
    state = {
        userName: ''
    };

    componentDidMount() {
        let user = authService.getCurrentUser() as any;
        if(user)
            this.setState({
                userName: user.userName
            })
    }

    render() {
        const userName = this.state.userName;
        return (
            <>{}
                <header className="jumbotron">
                    <h3>ToDo List</h3>
                    {
                        userName ?
                            <h4>Hello {userName} you can manage your tasks now.</h4> :
                            <h6>To manage your tasks, please <Link to='/login'>login</Link>.</h6>
                    }

                </header>
            </>
        );
    }
}

export default Home;