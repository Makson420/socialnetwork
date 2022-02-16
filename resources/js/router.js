import {createRouter, createWebHistory} from "vue-router";
import Container from "./views/layuot/Container";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Dashboard from "./views/pages/Dashboard";
import UserProfile from "./views/pages/UserProfile";


const routes = [
    {
        path: "/",
        name: Container,
        component: Container
    },
    {
        path: "/Login",
        name: Login,
        component: Login
    },
    {
        path: "/Register",
        name: Register,
        component: Register
    },
    {
        path: "/Dashboard",
        name: Dashboard,
        component: Dashboard
    },
    {
        path: "/UserProfile",
        name: UserProfile,
        component: UserProfile
    },
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
