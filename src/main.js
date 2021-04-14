import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BaseInput from './components/BaseInput.vue'
import BaseRating from "./components/BaseRating";

const app = createApp(App)

app.component('base-input', BaseInput)
app.component('base-rating', BaseRating)
app.use(router).mount('#app')
