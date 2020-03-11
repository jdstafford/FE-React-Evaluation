import React from 'react';

import { history } from './helpers';

import 'bulma/css/bulma.css';
import './App.css';

import { Redirect, Route, Router, Switch } from 'react-router-dom';

import { ProtectedRoute } from './components';
import { HomePage } from './Home';
import { LoginPage } from './Login';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <ProtectedRoute exact path="/" component={HomePage} />
                    <ProtectedRoute exact path="/nav2" component={HomePage} />
                    <ProtectedRoute exact path="/nav3" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
