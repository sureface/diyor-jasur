import { createApp } from 'vue'
import main from './pages/main.vue'
import './index.css'
import router from "./router/router.js";

createApp(main)
    .use(router)
    .mount('#app')
