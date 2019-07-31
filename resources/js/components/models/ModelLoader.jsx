import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ModelLoader = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => <Component {...props} />} />
);
