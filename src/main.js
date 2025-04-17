import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()

// Pinia'yı ve router'ı kullanarak uygulamayı başlatın
app.use(pinia)
app.use(router)
app.mount('#app')
