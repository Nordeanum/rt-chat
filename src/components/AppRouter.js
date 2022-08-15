import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/constants";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        user ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={route.element} exact={true} key={route.path} />
                )}
                <Route path="*" element={<Navigate replace to={CHAT_ROUTE} />} />
            </Routes>
        :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.element} exact={true} key={route.path} />
                )}
                <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
            </Routes>
    );
};

export default AppRouter;