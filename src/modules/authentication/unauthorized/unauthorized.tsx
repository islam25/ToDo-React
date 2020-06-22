import React from 'react';

class UnAuthorized extends React.Component {
    render() {
        return (
            <>
                <header className="jumbotron">
                    <h3>ToDo List</h3>
                    <h5>Sorry, you are unauthorized, you can check with admin.</h5>
                </header>
            </>
        );
    }
}

export default UnAuthorized;