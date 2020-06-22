import React from 'react';
import todoService from '../../services/todo.service';
import ToDo from '../../entites/todo';

export default class ToDoList extends React.Component {
    state = {
        todos: []
    }

    componentDidMount() {
        todoService.getAll().then((res: any) => {
            this.setState({
                todos: res
            });
        })
    }

    render() {
        return (
            <>
                <table className='table tabel-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((item: ToDo, i) => {
                            return (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                            </tr>);
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}