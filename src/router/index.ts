import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/shared/pages/HomePage.vue'
import AboutPage from '@/shared/pages/AboutPage.vue'

const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL),
    routes: [
        //public
        { path:'/', name: 'home', component: HomePage },
        { path:'/about', name: 'about', component: AboutPage },
        
        //characters
        {
            path:'/characters',
            name: 'characters',
            component: () => import('@/characters/layouts/CharacterLayout.vue') //lazy loading
        },
        //default
        { path: '/:pathMatch(.*)*', redirect: () => ({name: 'home'})}
    ]
})

export default router