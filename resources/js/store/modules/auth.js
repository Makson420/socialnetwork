import axios from "axios";


const state = {
    userDetails: {

    },
    isLoggedIn: false,

}

const actions = {

}

const mutations = {

}

const getters = {
    loggedIn(state) {
        return state.isLoggedIn
    },
    userDetails(state) {
        return state.userDetails
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
