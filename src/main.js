import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import AppLoader from './components/AppLoader.vue'
import router from './router'

createApp(App)
.component('AppLoader', AppLoader)
.use(router)
.mount('#app')
