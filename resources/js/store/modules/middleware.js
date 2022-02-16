
const state = {
    user: {
        loggedIn: false,
        isSubscribed: false,
        token: !!localStorage.getItem('token') || ''
    },


}

const actions = {

}

const mutations = {

}

const getters = {
    auth(state) {
        return state.user
    },
    loggedIn(state) {
        return state.token == null
    }

}

export default  {
    namespased: true,
    state,
    actions,
    mutations,
    getters,
}
