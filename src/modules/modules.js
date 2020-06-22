// import React from 'react'
import todo from './todo';
import authorization from './authentication';

const routes = [];
routes.push(...authorization.routes);
routes.push(...todo.routes);

export default {
    routes: routes,
    name: 'modules'
};