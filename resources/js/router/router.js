import {createRouter, createWebHistory} from "vue-router";
import Container from "../views/layuot/Container";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import Dashboard from "../views/pages/Dashboard";
import UserProfile from "../views/pages/UserProfile";
import store from "../store"
import Middleware from "../middleware"
import MiddlewarePipeline from "../middleware"
import middlewarePipeline from "./middlewarePipeline";

const routes = [
    {
        path: "/",
        name: Container,
        component: Container
    },
    {
        path: "/Login",
        name: Login,
        component: Login,
        meta: {
            middleware: [Middleware.guest]
        }
    },
    {
        path: "/Register",
        name: Register,
        component: Register,
        meta: {
            middleware: [Middleware.guest]
        }
    },
    {
        path: "/Dashboard",
        name: Dashboard,
        component: Dashboard,
        meta: {
            middleware: [Middleware.auth]
        },
        children: [
            {
                path: "/dashboard/userprofile",
                name: "dashboard.userprofile",
                component: UserProfile,
                meta: {
                    middleware: [Middleware.auth, Middleware.isSubscribed]
                }
            }
        ]
    },

]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach((to, from, next, store) => {
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
