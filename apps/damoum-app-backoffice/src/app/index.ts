import '@core/iconify/icons-bundle'
import App from './App.vue'
import vuetify from '@core/vuetify'
import router from './providers/router/router'
import '@core/assets/styles/scss/template/index.scss'
import '@core/assets/styles/scss/index.scss'
import '@core/assets/styles/scss/styles.scss'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import { easterEgg } from '@utils'
import { VueQueryPlugin } from '@tanstack/vue-query'
import '@mdi/font/css/materialdesignicons.css'

easterEgg()
export const app = createApp(App)
  .use(vuetify)
  .use(VueQueryPlugin)
  .use(createPinia().use(piniaPluginPersistedstate))
  .use(router)
