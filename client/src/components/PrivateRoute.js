import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LoggerContext } from '../contexts/Logger'

export default function PrivateRoute({component: Component, ...rest}) {

    const { isLoggedIn } = useContext(LoggerContext)

    return (
        <Route
        {...rest}
        render = {props => {
           return isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
        }}> 
        </Route>
    )
}
