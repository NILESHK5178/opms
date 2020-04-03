import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './Login_component/auth';

export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} 
        render = { (props) => {
            if (auth.islogin()) {
                return <Component {...props} />
            } 
            else {
                    return <Redirect to ={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }

                    } />
                }
            }
        }/>
    )
};