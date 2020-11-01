import React from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    const {
        user: { logged },
    } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <PrivateRoute
                        path="/"
                        component={DashboardRouter}
                        isAuthenticated={logged}
                    />
                </Switch>
            </div>
        </Router>
    );
};
