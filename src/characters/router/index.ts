import type { RouteRecordRaw } from "vue-router";

import CharacterId from "../pages/CharacterId.vue";
import CharacterList from "../pages/CharacterList.vue";
import CharacterSearch from "../pages/CharacterSearch.vue";

export const charactersRoute: RouteRecordRaw = {
    path: '/characters',
    name: 'characters',
    redirect: () => ({name: 'character-list'}),
    component: () => import('@/characters/layouts/CharacterLayout.vue'),
    children: [
        { path: 'by/:id', name: 'character-id', component: CharacterId },
        { path: 'list', name: 'character-list', component: CharacterList },
        { path: 'search', name: 'character-search', component: CharacterSearch },
    ]
}