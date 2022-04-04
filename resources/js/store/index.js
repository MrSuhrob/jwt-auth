import { createStore } from 'vuex'
import authMiddleware from './middlewares/auth-middleware'
import auth from './modules/auth'
import users from "./modules/users";

const store = createStore({
    state() {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        auth,
        users
    },
    plugins: [authMiddleware]
})

export default store