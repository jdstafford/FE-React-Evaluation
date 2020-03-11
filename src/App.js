import React, { useEffect } from 'react';

import { history } from './helpers';

import 'bulma/css/bulma.css';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import { alertActions } from './actions';
import { ProtectedRoute } from './components';
import { HomePage } from './Home';
import { LoginPage } from './Login';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);

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
