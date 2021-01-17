<template>
<div class="">
        <h1>{{user.name}}</h1>
        <hr/>
        <b>{{user.email}}</b>

</div>
</template>


<script>
export default {
    async asyncData({params, error, store}) {
        try {
            const user = await store.dispatch('users/fetchUsersById',params.id)
            //const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            return {user}
        } catch(e) {
            console.log(e)
            error(e)
        }
    },
    validate({params}) {
        return /^\d+$/.test(params.id)
    }
}
</script>