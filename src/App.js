import React from 'react';

import { history } from './helpers';

import 'bulma/css/bulma.css';
import './App.css';

import { Redirect, Route, Router, Switch } from 'react-router-dom';

import { PageWrapper, ProtectedRoute } from './components';
import { HomePage } from './Home';
import { LoginPage } from './Login';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <ProtectedRoute
                        exact
                        path="/"
                        component={() => (
                            <PageWrapper>
                                <HomePage />
                            </PageWrapper>
                        )}
                    />
                    <ProtectedRoute
                        exact
                        path="/nav2"
                        component={() => (
                            <PageWrapper>
                                <HomePage />
                            </PageWrapper>
                        )}
                    />
                    <ProtectedRoute
                        exact
                        path="/nav3"
                        component={() => (
                            <PageWrapper>
                                <HomePage />
                            </PageWrapper>
                        )}
                    />
                    <Route path="/login" component={LoginPage} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
