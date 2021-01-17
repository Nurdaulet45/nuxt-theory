<template>
<section>
    <h1>Error page</h1>
    <nuxt-link :to="'/'">Home</nuxt-link>
</section>
</template>

<style scoped>
h1{
color: red;
}
section{
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>