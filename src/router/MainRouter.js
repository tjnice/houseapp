import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Nav from '../pages/nav/Nav'
import Login from '../pages/login/Login'
import Reg from '../pages/reg/Reg'
import City from '../pages/city/City'
import Error404 from '../error404'
export default class MainRouter extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact  path='/' component={Nav}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/reg' component={Reg}></Route>
                        <Route path='/city' component={City}></Route>
                        <Route  component={Error404}></Route>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
