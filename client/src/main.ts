import { createApp } from '@vue/runtime-dom'
import App from './App.vue'
import './style.css'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App);
app.use(VueQueryPlugin);

app.mount('#app')
