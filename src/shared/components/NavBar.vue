<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <nav>
        <img src="@/assets/logo.svg" alt="Vue Logo" height="25" width="25">
        <span>{{props.title}}</span>

        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
    </nav>
</template>


<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
}
img {
    margin-right: 5px;
}
span {
    margin-right: 10px;
}
/* RouterLink */
a {
    margin-right: 5px;
}
</style>