import axios from 'axios';  

const state = {
    message: '' ,
    errorLogin: []
}
const actions = {
    login({commit}, user) {
        commit('SET_ERRORS',[])
        commit('SetMessage', "")
        axios.post('user/login', {
            email:user.email,
            password:user.password
        }).then (response => {
            if(response.data.access_token){
                localStorage.setItem("blog_token", response.data.access_token)
                window.location.replace('home')
            }
            if(response.data.message){
                commit('SetMessage', response.data.message)

            }
        }).catch(e => {
            commit('SET_ERRORS',e.response.data.errors)
         })
    }
}
const mutations = {
    SetMessage(state, data){
        state.message = data 
    },

    SET_ERRORS(state,data){
        state.errorLogin = data
    }
}


export default {
    namespaced: true,
    state, 
    actions,
    mutations
}