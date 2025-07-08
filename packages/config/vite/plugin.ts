import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'

export function createVitePlugins() {
  return [
    vue(),
    vueJsx(),
    viteCompression({
      algorithm: 'gzip',
      ext: 'gz'
    })
  ]
}
