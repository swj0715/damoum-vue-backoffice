import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import defaults from './defaults'
import { icons } from './icons'
import theme from './theme'

// Styles
// import 'packages/core/assets/styles/scss/template/libs/vuetify/index.scss'
import '../assets/styles/scss/template/libs/vuetify/index.scss'
import 'vuetify/styles'

export default createVuetify({
  aliases: {
    IconBtn: VBtn
  },
  defaults,
  icons,
  theme
})
