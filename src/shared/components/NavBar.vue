<script setup lang="ts">
import type { RouterLink } from "@/router/link-routes";

interface PropsNavBar { title?: string, links: RouterLink[] }
const props = defineProps<PropsNavBar>()
</script>

<template>
    <nav>
        <img src="@/assets/logo.svg" alt="Vue Logo" height="25" width="25">
        <span>{{props.title}}</span>
        <RouterLink v-for="{name, path, title} in props.links" :key="name" :to="path">{{title}}</RouterLink>
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