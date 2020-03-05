import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route parth="/" exact component={Login} />
                <Route parth="/dashboard" component={Dashboard} />
                <Route parth="/new" component={New} />
            </Switch>
        </BrowserRouter>
    );
}