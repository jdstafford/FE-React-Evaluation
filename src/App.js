import React from 'react';

import { history } from './helpers';

import 'bulma/css/bulma.css';
import './App.css';

import { Redirect, Route, Router, Switch } from 'react-router-dom';

import { PageWrapper, ProtectedRoute } from './components';
import { HomePage } from './pages/Home';
import { InterestsPage } from './pages/Interests';
import { LoginPage } from './pages/Login';
import { SkillsPage } from './pages/Skills';

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <ProtectedRoute
                        exact
                        path="/home"
                        component={() => (
                            <PageWrapper>
                                <HomePage />
                            </PageWrapper>
                        )}
                    />
                    <ProtectedRoute
                        exact
                        path="/interests"
                        component={() => (
                            <PageWrapper>
                                <InterestsPage />
                            </PageWrapper>
                        )}
                    />
                    <ProtectedRoute
                        exact
                        path="/skills"
                        component={() => (
                            <PageWrapper>
                                <SkillsPage />
                            </PageWrapper>
                        )}
                    />
                    <Route path="/login" component={LoginPage} />
                    <Redirect from="*" to="/home" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
