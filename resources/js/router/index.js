import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/auth/Login.vue";
import Registertation from "../views/auth/registertation.vue";
import Home from "../views/Home.vue";
import NotFound from "../views/errors/NotFound.vue";

const routes = [{
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            breadcrumb: 'Login Page',
        }
    },
    {
        path: "/register",
        name: "register",
        component: Registertation,
        meta: {
            breadcrumb: 'Registertation Page',
        }
    },
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
            breadcrumb: 'Home Page',
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;