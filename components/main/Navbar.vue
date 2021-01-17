<template>
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">NuxtJs</a>
        <div class="collapse navbar-collapse" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
            <nuxt-link no-prefetch class="nav-link" exact active-class="active" aria-current="page" :to="'/'">Home</nuxt-link>
            </li>
            <li class="nav-item">
            <nuxt-link no-prefetch class="nav-link" active-class="active" :to="{name: 'users'}">Users </nuxt-link>
            </li>
             <li class="nav-item">
            <nuxt-link no-prefetch class="nav-link" active-class="active" :to="{name: 'about'}">About </nuxt-link>
            </li>
               <li class="nav-item">
            <nuxt-link no-prefetch class="nav-link" active-class="active" :to="{name: 'login'}">Login </nuxt-link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</header>
    
</template>