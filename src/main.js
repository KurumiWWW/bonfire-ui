import { createApp } from 'vue'
import App from './App.vue'

import BButton from "./components/basic/button.vue"

const app = createApp(App)

app.component(BButton.name, BButton)

app.mount('#app')

