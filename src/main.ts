import 'normalize.css'
import '@/assets/styles/base.css'
import '@/assets/styles/utils.css'
import "@/assets/styles/main.css"
import { createApp } from 'vue'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far)

const app = createApp(App)

app.use(VueQueryPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

