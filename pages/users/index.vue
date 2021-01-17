<template>
<section>
    <h1>{{pageTitle}}</h1>
    <ul v-for="user in users" :key="user.id">
        <li>
            <nuxt-link :to="{name: 'users-id', params: {id: user.id}}">{{user.name}} ({{user.email}})</nuxt-link>
            
        </li>
    </ul>
</section>
</template>
<script>
export default {
    // fetch метод vuex пен жумыс жасауга арналган ягни ответ кайтармайды
     /* nuxtServerInit ке лактырдык
     async fetch({store, error}) {
        try {
            if(store.getters['users/users'].length === 0) {
            const users = await store.dispatch('users/fetchUsers')
            }
        } catch(e) {
            error(e)
        }
    },*/
     /*Vuex ке ауыстырдык данныларды
     async asyncData({store, error}) {
        try {
            const users = await store.dispatch('users/fetchUsers')
            return {users}
        } catch(e) {
            error(e)
        }
    },*/
    /*async asyncData({$axios, error}) {
        try {
            const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
            return {users}

        } catch(e) {
            error(e)
        }
    },*/
    data: () => ({
        pageTitle: 'Uses page'
    }),
    computed: {
        users() {
            return this.$store.getters['users/users']
        }
    }
}
</script>