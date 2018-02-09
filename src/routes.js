import React from 'react';
import { Switch, Route } from 'react-router-dom';
import dashboard from './components/dashboard/dashboard';



export default (
    <Switch>
        <Route exact path='/' component={dashboard} />
    </Switch>
)