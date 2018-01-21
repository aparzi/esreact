import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from "./components/home/home"
import Login from "./components/login/login"
import MainTemplate from "./components/mainLayout/template/mainTemplate"

class App extends Component {

    render() {

        return (
            <BrowserRouter>
                <MainTemplate>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={Login}/>
                    </Switch>
                </MainTemplate>
            </BrowserRouter>
        );
    }
}

export default App;
