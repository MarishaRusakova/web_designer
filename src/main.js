import { createApp } from 'vue'
import App from './App.vue'
import { createRouter , createWebHistory } from 'vue-router'

import MainView from './pages/main.vue'
import AboutMeView from './pages/aboutMe.vue'
import AccountView from './pages/account.vue'
import OrderView from './pages/order.vue'
import PoliticView from './pages/politic.vue'
import ServicesView from './pages/services.vue'

const routes = [ 
  { path: '/main', component: MainView },
  { path: '/about', component: AboutMeView},
  { path: '/account', component: AccountView },
  { path: '/order', component: OrderView },
  { path: '/politic', component: PoliticView },
  { path: '/services', component: ServicesView },
  { path: '/', redirect: '/main' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
const app = createApp(App)
app.use(router)
.mount('#app')