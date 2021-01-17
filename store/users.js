export const state = {
    users: []
}

export const mutations = {
    setUsers(state, users) {
        state.users = users
    }
}

export const actions = {

    async fetchUsers({commit}) {
        try {
            const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
            commit('setUsers', users)
        } catch(e) {
            throw e
         }
    },
    /* vuex ке сактайтын жасадык данныларды
    async fetchUsers() {
        try {
            const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
            return users
        } catch(e) {
            throw e
         }
    },*/
    async fetchUsersById({},userId) {
        try {
            return await this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        } catch(e) {
            throw e
         }
    },
}


export const getters = {
    users: state => state.users
}