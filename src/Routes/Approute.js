import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../container/Home';
import Login from '../container/Login';
import Register from '../container/Register';
import Dashboard from '../container/Dashboard';


function Approute(props) {
    const getToken = () => {
        return localStorage.getItem("login") || null;
    }

    const PublicRoute = ({component:Component, ...rest}) => {
        return(
          <Route
          {...rest}
          render={props => {
            return !getToken() ? (<Component {...props}/>)
            : (<Redirect to={{pathname:"/dashboard"}}/>)
            }}
          />
        )
      }

      const PrivateRoute = ({component:Component, ...rest}) => {
        return (
          <Route
          {...rest}
           render={props => {
             return getToken() ? <Component {...props}/>
             : <Redirect to={{pathname:"/login"}}/>
             }}
          />
        )
      }
    
    
    
    return (
        <div>
            <Switch>
                <PublicRoute exact path="/" component={Home}/>
                <PublicRoute path="/login" component={Login}/>
                <PublicRoute path="/register" component={Register}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
            </Switch>
        </div>
    );
}

export default Approute;