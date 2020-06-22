import ToDoList from './components/todo-list/todo-list';
import ToDoForm from './components/todo-form/todo-form';
// import React from 'react'
// const ToDoList = React.lazy(() => import('./components/todo-list/todo-list'))
// const ToDoForm = React.lazy(() => import('./components/todo-form/todo-form'))

export default {
    routes: [
        {
            path: '/create',
            component: ToDoForm,
            roles: ['admin']
        },
        {
            path: '/todos',
            component: ToDoList,
            roles: ['admin', 'user']
        }
    ],
    name: 'todo module'
};