import {createRouter, createWebHistory} from "vue-router";
import Container from "../views/layuot/Container";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import Dashboard from "../views/pages/Dashboard";
import UserProfile from "../views/pages/UserProfile";

import Middleware from "../middleware";
import store from "../store"
import middlewarePipeline from "./middlewarePipeline";

const routes = [
    {
        path: "/",
        name: Container,
        component: Container
    },
    {
        path: "/login",
        name: Login,
        component: Login,

    },
    {
        path: "/register",
        name: Register,
        component: Register,

    },
    {
        path: "/dashboard",
        name: Dashboard,
        component: Dashboard,
        meta: {
            middleware: [Middleware.auth]
        },
    },

    {
        path: "/profile",
        name: UserProfile,
        component: UserProfile,
        meta: {
            middleware: [Middleware.auth]
        },
    },

]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})


router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }

    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store
    }
    return  middleware[0] ({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })

})

export default router
