import React from 'react';
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Nav from './Nav';
import Context from '../materiContext/Movie'
import { Switch, Route } from 'react-router'

const Routes = () => {
    return (
        <>
            <Nav />
            <Switch>
                <Route exact path="/context">
                    <Context />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default Routes;