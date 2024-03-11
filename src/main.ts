import { createApp } from 'vue'
import App from './App.vue'
import router from './shared/router/router'

import '@/shared/style/style.css'

createApp(App).use(router).mount('#app')
