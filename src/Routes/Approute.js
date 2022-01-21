import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../container/Home';
import Login from '../container/Login';
import Register from '../container/Register';


function Approute(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </div>
    );
}

export default Approute;