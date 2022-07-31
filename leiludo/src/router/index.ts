import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/home/Home.vue'
import Store from '../views/store/Store.vue'
import Aution from '../views/auction/Auction.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/loja', name: 'Store', component: Store},
        {path: '/leilao', name: 'Aution', component: Aution}
    ]
})

export default router