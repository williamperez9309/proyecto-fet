import Vue from "vue"
import Vuex from "vuex"

import login from "./modules/Login";
import User from  "./modules/User"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        login,
        User
    }
})
