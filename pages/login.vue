<template>
    <form>
        <h1>Login</h1>
        <div class="form-group">
            <input type="text" name="email" placeholder="Email" class="form-control">
        </div>
        
        <div class="form-group">
            <input type="text" name="password" placeholder="password" class="form-control">
        </div>
        <p><nuxt-link :to="'/'">Home</nuxt-link></p>
        <button class="btn btn-primary">Login</button>
    </form>
</template>

<script>
export default {
    name: 'login',
    layout: 'empty'
}
</script>
<style scoped>
form{
    width: 600px;
}
</style>