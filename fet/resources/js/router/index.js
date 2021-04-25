import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import example  from "../components/ExampleComponent"
import user  from "../components/user/ContainerComponent"

const routes = [

    {   
        component: example,
        name:   "example", 
        path:   "/example"

    },
    {   
        component: user,
        name:   "user", 
        path:   "/user"

    },
];

export default new VueRouter({
       routes
});


