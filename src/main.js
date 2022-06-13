import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useIcon } from '@/helpers/useIcon.js'
import AppIcon from '@/components/AppIcon'
import '@/assets/styles/tailwind.css'

createApp(App)
  .use(store)
  .use(router)
  .use(useIcon)
  .component('AppIcon', AppIcon)
  .mount('#app')
