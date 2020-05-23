import React from "react";
import { Route, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin/Admin.js";

export const ProtectedRoute = ({
    component: Component,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('isLogged')) {
                    return <AdminLayout {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};
