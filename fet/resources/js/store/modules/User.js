import axios from  "axios"

const state = {
    listUsers: [],
    currentUser: {},
    message: '',
    user: {}
}

const actions = {
    async getList({commit}){
        try {
            const response = await axios.get('user/users')
            commit('SET_USERS', response.data.users)
        } catch (error) {
            console.log(error);
        }
    },

   async getCurrent({commit}){
        const response = await 
        axios.get('user/current')
        commit('SETCURRENTUSER', response.data.user)
    },

    async saveUser({commit}, user) {
        const response = await axios.post('user/users/store', {
            name: user.name,
            email: user.email,
            password: user.password
        })  
        commit('SET_DATA', response.data.user)
    },

    async updateUser({commit}, user) {
        const response = await axios.put('user/update', {
            name: user.name,
            email: user.email,
            password: user.password,
            id: user.id
 
        })
        
        commit('SET_DATA', response.data.user)
    }
}
const mutations = {
    SET_USERS(state, data ){
        state.listUsers = data 
    },

    SETCURRENTUSER(state, data){
        state.currentUser = data

    },
    
    SET_MESSAGE(state, data){
        state.message = data
    },

    SET_DATA(state, data){
        state.user = data
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}