import React from 'react';
import todoService from '../../services/todo.service';
import ToDo from '../../entites/todo';

export default class TodoForm extends React.Component {

    state = {
        name: '',
        description: '',
        loading: false,
    };
    form: any;
    props: any;
    
    onTodoNameChange = (event: any) => {
        this.setState({
            name: event.target.value
        });
    }

    onTodoDescriptionChange = (event: any) => {
        this.setState({
            description: event.target.value
        })
    }

    handleLogin = (e: any) => {
        e.preventDefault();

        this.setState({
            loading: true
        });

        if (this.state.name) {
            todoService.add(new ToDo(0 , this.state.name , this.state.description))
            .then(() => {
                this.props.history.push('/todos');
            });
        }else{
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (
            <>
                <form
                onSubmit={this.handleLogin}
                >
                    <div className='form-group'>
                        <label htmlFor='todoName'>Todo Name</label>
                        <input
                            type='text'
                            name='todoName'
                            className='form-control'
                            onChange={this.onTodoNameChange}
                            required
                             />
                    </div>
                    <div className="form-group">
                        <label htmlFor="desciption">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            onChange={this.onTodoDescriptionChange}
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
                            <span>Save</span>
                        </button>
                    </div>
                </form>
            </>
        );
    }
}