import { createApp } from '@vue/runtime-dom'
import App from './App.vue'
import './style.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import router from './router'

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(autoAnimatePlugin);
app.use(router);

app.mount('#app')
