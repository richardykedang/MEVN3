import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// import jquery popper
import 'bootstrap'

createApp(App).use(store).use(router).mount('#app')
