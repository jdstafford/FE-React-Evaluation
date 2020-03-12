import React from 'react';

import { history } from './helpers';

import 'bulma/css/bulma.css';
import './App.css';

import { Redirect, Route, Router, Switch } from 'react-router-dom';

import { PageWrapper, ProtectedRoute } from './components';
import { HomePage } from './Home';
import { InterestsPage } from './Interests';
import { LoginPage } from './Login';
import { SkillsPage } from './Skills';

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
