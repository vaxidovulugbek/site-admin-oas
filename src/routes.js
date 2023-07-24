import React, { Fragment, Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "components";
import constants from "helpers/constants";

// import components with lazy
const Home = lazy(() => import("pages/Home"));
const MenuItems = lazy(() => import("pages/MenuItems"));
const Banner = lazy(() => import("pages/Banner"));
const Category = lazy(() => import("pages/Category"));
const Post = lazy(() => import("pages/Post"));
const Tariff = lazy(() => import("pages/Tariff"));
const Pages =  lazy(() => import("pages/Pages"));
const Orders = lazy(() => import("pages/Orders"));
const Login = lazy(() => import("pages/Login"));

// routes with component
const { roles } = constants;
const allRoute = [
    {
        path: "/",
        element: <Home />,
        roles: [roles.ROLE_SUPER_ADMIN],
        auth: false,
    },
    {
        path: "/menu-items",
        element: <MenuItems />,
        roles: [roles.ROLE_SUPER_ADMIN],
        auth: false,
    },
    {
        path: "/banner",
        element: <Banner />,
        roles: [roles.ROLE_SUPER_ADMIN],
        auth: false,
    },
    {
        path: "/category",
        element: <Category />,
        roles: [roles.ROLE_SUPER_ADMIN],
        auth: false,
    },
    {
        path: "/post",
        element: <Post />,
        roles: [roles.ROLE_SUPER_ADMIN],
        auth: false,
    },
    {
        path: "/orders",
        element: <Orders />,
        roles: [roles.ROLE_SUPER_ADMIN],
        auth: false,
    },
    {
        path: "/tariff",
        element: <Tariff />,
        roles: [roles.ROLE_SUPER_ADMIN],
        auth: false,
    },
    {
        path: "/pages",
        element: <Pages />,
        roles: [roles.ROLE_SUPER_ADMIN],
        auth: false,
    },
    {
        path: "/login",
        element: <Login />,
        roles: [""],
        auth: true,
    },
];

const AllRoutes = ({ routes }) => {
    return (
        <Suspense fallback={""}>
            <Routes>
                {routes.map(({ path, element }) => {
                    return (
                        <Fragment key={path}>
                            <Route path={path} element={element} exact />;
                        </Fragment>
                    );
                })}
                <Route
                    path="*"
                    element={<Navigate to={"/"} replace={true} />}
                ></Route>
            </Routes>
        </Suspense>
    );
};

const authorizedRoutes = (role) =>
    allRoute.filter((route) => route.roles.includes(role));

export const AuthorizedRoutes = ({ user }) => (
    <Layout>
        <AllRoutes routes={authorizedRoutes(user.role)} />
    </Layout>
);

const unAuthorizedRoutes = allRoute.filter((route) => route.auth);

export const UnAuthorizedRoutes = () => (
    <AllRoutes routes={unAuthorizedRoutes} />
);
